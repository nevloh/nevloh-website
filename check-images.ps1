# check-images.ps1
# This script checks all image references in your project and reports missing files

Write-Host "=== NEVLOH IMAGE REFERENCE CHECKER ===" -ForegroundColor Cyan
Write-Host "Scanning for image references...`n" -ForegroundColor Yellow

# Define image patterns to search for
$imagePatterns = @(
    # Next.js Image component: <Image src="/path/to/image.jpg" />
    '<Image[^>]+src=[''"]([^''"]+)[''"]',

    # Regular img tag: <img src="/path/to/image.jpg" />
    '<img[^>]+src=[''"]([^''"]+)[''"]',

    # CSS background-image: url('/path/to/image.jpg')
    'url\([''"]([^''")]+\.(jpg|jpeg|png|gif|svg|webp|ico))[''"]?\)',

    # Meta tags for og:image and twitter:image
    'content=[''"]([^''"]+\.(jpg|jpeg|png|gif|svg|webp|ico))[''"]',

    # Schema.org image URLs
    '"image":\s*[''"]([^''"]+\.(jpg|jpeg|png|gif|svg|webp|ico))[''"]',
    '"logo":\s*[''"]([^''"]+\.(jpg|jpeg|png|gif|svg|webp|ico))[''"]',

    # Import statements: import logo from './logo.png'
    'import\s+\w+\s+from\s+[''"]([^''"]+\.(jpg|jpeg|png|gif|svg|webp|ico))[''"]',

    # Favicon links
    'href=[''"]([^''"]+\.(ico|png))[''"]'
)

# Directories to scan
$directoriesToScan = @('pages', 'components', 'public', 'styles', 'src')

# Store results
$missingImages = @()
$foundImages = @()
$totalReferences = 0

# Function to check if image exists
function Test-ImageExists {
    param (
        [string]$imagePath,
        [string]$baseDir
    )

    # Clean up the path
    $imagePath = $imagePath.Trim()

    # Remove query strings and fragments
    $imagePath = $imagePath -replace '\?.*, ''
    $imagePath = $imagePath -replace '#.*, ''

    # Skip external URLs
    if ($imagePath -match '^https?://') {
        return $null  # We won't check external URLs
    }

    # Convert relative paths to absolute
    if ($imagePath -match '^/') {
        # Absolute path from root
        $fullPath = Join-Path $baseDir "public$imagePath"
    } elseif ($imagePath -match '^\.\.?/') {
        # Relative path - harder to resolve without context
        # Try common locations
        $testPaths = @(
            (Join-Path $baseDir "public/$imagePath"),
            (Join-Path $baseDir "$imagePath"),
            (Join-Path $baseDir "public/images/$imagePath")
        )

        foreach ($testPath in $testPaths) {
            $resolved = [System.IO.Path]::GetFullPath($testPath)
            if (Test-Path $resolved) {
                return $resolved
            }
        }
        return $null
    } else {
        # No leading slash - try public directory
        $fullPath = Join-Path $baseDir "public/$imagePath"
    }

    # Resolve and test
    try {
        $resolved = [System.IO.Path]::GetFullPath($fullPath)
        if (Test-Path $resolved) {
            return $resolved
        }
    } catch {
        # Path resolution failed
    }

    return $null
}

# Get project root
$projectRoot = Get-Location

# Scan all directories
foreach ($dir in $directoriesToScan) {
    if (-not (Test-Path $dir)) {
        continue
    }

    Write-Host "Scanning: $dir/" -ForegroundColor Cyan

    # Get all relevant files
    $files = Get-ChildItem -Path $dir -Recurse -Include *.js,*.jsx,*.tsx,*.ts,*.css,*.scss,*.html -File

    foreach ($file in $files) {
        $relativePath = $file.FullName.Replace("$projectRoot\", "")
        $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue

        if (-not $content) {
            continue
        }

        # Split content into lines for line number tracking
        $lines = Get-Content $file.FullName

        # Check each pattern
        foreach ($pattern in $imagePatterns) {
            $foundMatches = [regex]::Matches($content, $pattern)

            foreach ($matchItem in $foundMatches) {
                $totalReferences++

                # Get the image path from the first capture group
                $imagePath = $matchItem.Groups[1].Value

                # Skip if empty or not an image
                if (-not $imagePath -or $imagePath -match '^data:image') {
                    continue
                }

                # Find line number
                $lineNumber = 0
                for ($i = 0; $i -lt $lines.Count; $i++) {
                    if ($lines[$i] -match [regex]::Escape($imagePath)) {
                        $lineNumber = $i + 1
                        break
                    }
                }

                # Check if image exists
                $exists = Test-ImageExists -imagePath $imagePath -baseDir $projectRoot

                if ($null -eq $exists -and $imagePath -notmatch '^https?://') {
                    # Image doesn't exist and it's not external
                    $missingImages += [PSCustomObject]@{
                        File = $relativePath
                        LineNumber = $lineNumber
                        ImagePath = $imagePath
                        FileName = [System.IO.Path]::GetFileName($imagePath)
                    }

                    Write-Host "  [MISSING] Line $lineNumber : $imagePath" -ForegroundColor Red
                } else {
                    $foundImages += $imagePath
                }
            }
        }
    }
}

# Display summary
Write-Host "`n=== SUMMARY ===" -ForegroundColor Magenta
Write-Host "Total image references scanned: $totalReferences" -ForegroundColor Cyan
Write-Host "Images found: $($foundImages.Count)" -ForegroundColor Green
Write-Host "Missing images: $($missingImages.Count)" -ForegroundColor $(if ($missingImages.Count -gt 0) { "Red" } else { "Green" })

if ($missingImages.Count -gt 0) {
    Write-Host "`n=== MISSING IMAGES DETAILS ===" -ForegroundColor Red
    Write-Host "Format: [File] Line [LineNumber]: [ImagePath]`n" -ForegroundColor Yellow

    # Group by file for better readability
    $groupedByFile = $missingImages | Group-Object -Property File

    foreach ($group in $groupedByFile) {
        Write-Host "`n$($group.Name)" -ForegroundColor Cyan
        foreach ($item in $group.Group) {
            Write-Host "  Line $($item.LineNumber): $($item.ImagePath)" -ForegroundColor Red
            Write-Host "    File: $($item.FileName)" -ForegroundColor Yellow
        }
    }

    # Export to CSV for easy review
    $csvPath = "missing-images-report.csv"
    $missingImages | Export-Csv -Path $csvPath -NoTypeInformation
    Write-Host "`nDetailed report saved to: $csvPath" -ForegroundColor Green

    # Create a summary file
    $summaryPath = "missing-images-summary.txt"
    $summary = @"
=== MISSING IMAGES REPORT ===
Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Total References: $totalReferences
Found: $($foundImages.Count)
Missing: $($missingImages.Count)

=== DETAILS ===

"@

    foreach ($group in $groupedByFile) {
        $summary += "`n$($group.Name)`n"
        foreach ($item in $group.Group) {
            $summary += "  Line $($item.LineNumber): $($item.ImagePath) [$($item.FileName)]`n"
        }
    }

    $summary | Out-File -FilePath $summaryPath -Encoding UTF8
    Write-Host "Text summary saved to: $summaryPath" -ForegroundColor Green

} else {
    Write-Host "`n[SUCCESS] All image references are valid!" -ForegroundColor Green
}

# List of unique missing image names
if ($missingImages.Count -gt 0) {
    Write-Host "`n=== UNIQUE MISSING IMAGES ===" -ForegroundColor Yellow
    $uniqueMissing = $missingImages | Select-Object -Property FileName -Unique | Sort-Object FileName
    foreach ($img in $uniqueMissing) {
        Write-Host "  - $($img.FileName)" -ForegroundColor Red
    }

    Write-Host "`nAction Required:" -ForegroundColor Yellow
    Write-Host "1. Create these images in the public/images/ directory" -ForegroundColor White
    Write-Host "2. Or remove the references from your code" -ForegroundColor White
    Write-Host "3. Or update paths to point to existing images" -ForegroundColor White
}