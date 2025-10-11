# fix-urls.ps1
# This script fixes all URL inconsistencies by adding www to all nevloh.com URLs

Write-Host "=== NEVLOH URL CONSISTENCY FIXER ===" -ForegroundColor Cyan
Write-Host "This will change ALL 'https://nevloh.com' to 'https://www.nevloh.com'" -ForegroundColor Yellow
Write-Host ""

# Ask for confirmation
$confirmation = Read-Host "Do you want to proceed? (Y/N)"
if ($confirmation -ne 'Y' -and $confirmation -ne 'y') {
    Write-Host "Cancelled" -ForegroundColor Red
    exit
}

Write-Host "`nScanning files..." -ForegroundColor Cyan

# Define patterns to search and replace
$patterns = @(
    @{
        Search = 'https://nevloh\.com'
        Replace = 'https://www.nevloh.com'
        Description = 'Adding www to nevloh.com URLs'
    },
    @{
        Search = '"url": "https://www\.nevloh\.com(?!\.)'
        Replace = '"url": "https://www.nevloh.com'
        Description = 'Ensuring schema URLs have www'
    },
    @{
        Search = 'content="https://nevloh\.com'
        Replace = 'content="https://www.nevloh.com'
        Description = 'Fixing meta tag URLs'
    },
    @{
        Search = 'href="https://nevloh\.com'
        Replace = 'href="https://www.nevloh.com'
        Description = 'Fixing href URLs'
    }
)

# Files to process
$filesToProcess = @(
    # Main pages
    "pages/index.js",
    "pages/about.js",
    "pages/services.js",
    "pages/industries.js",
    "pages/sustainability.js",
    "pages/contact.js",
    "pages/blog.js",
    "pages/privacy.js",
    "pages/terms.js",

    # Service pages
    "pages/services/fleet-refuelling.js",
    "pages/services/generator-refuelling.js",
    "pages/services/on-site-fuel-delivery.js",
    "pages/services/bulk-fuel.js",
    "pages/services/haulage.js",
    "pages/services/ulsd.js",

    # Components (if any)
    "components/HeroSection.js",
    "components/ServicesSection.js",
    "components/ProcessSection.js",
    "components/CallToAction.js",
    "components/Footer.js",
    "components/Header.js",
    "components/Navbar.js",

    # Config files
    "next-sitemap.config.js",
    "next.config.js"
)

$filesModified = 0
$totalChanges = 0

foreach ($file in $filesToProcess) {
    if (Test-Path $file) {
        Write-Host "`nProcessing: $file" -ForegroundColor Yellow

        $content = Get-Content $file -Raw -ErrorAction SilentlyContinue
        if ($null -eq $content) {
            Write-Host "  Could not read file" -ForegroundColor Red
            continue
        }

        $originalContent = $content
        $changesInFile = 0

        # Apply each pattern
        foreach ($pattern in $patterns) {
            $foundMatches = [regex]::Matches($content, $pattern.Search)
            if ($foundMatches.Count -gt 0) {
                $content = $content -replace $pattern.Search, $pattern.Replace
                $changesInFile += $foundMatches.Count
                Write-Host "  $($pattern.Description): $($foundMatches.Count) changes" -ForegroundColor Green
            }
        }

        # Only write if content changed
        if ($content -ne $originalContent) {
            Set-Content -Path $file -Value $content -NoNewline
            $filesModified++
            $totalChanges += $changesInFile
            Write-Host "  Saved $changesInFile changes" -ForegroundColor Cyan
        } else {
            Write-Host "  No changes needed" -ForegroundColor Gray
        }
    } else {
        Write-Host "  File not found: $file" -ForegroundColor DarkGray
    }
}

# Process ALL .js and .jsx files in pages and components directories recursively
Write-Host "`nScanning all .js/.jsx files recursively..." -ForegroundColor Cyan

$directories = @('pages', 'components', 'src')
foreach ($dir in $directories) {
    if (Test-Path $dir) {
        $allJsFiles = Get-ChildItem -Path $dir -Recurse -Include *.js,*.jsx -File

        foreach ($file in $allJsFiles) {
            $relativePath = $file.FullName.Replace((Get-Location).Path + '\', '')

            # Skip if already processed
            if ($filesToProcess -contains $relativePath) {
                continue
            }

            $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
            if ($null -eq $content) {
                continue
            }

            $originalContent = $content
            $changesInFile = 0

            # Apply each pattern
            foreach ($pattern in $patterns) {
                $foundMatches = [regex]::Matches($content, $pattern.Search)
                if ($foundMatches.Count -gt 0) {
                    $content = $content -replace $pattern.Search, $pattern.Replace
                    $changesInFile += $foundMatches.Count
                }
            }

            # Only write if content changed
            if ($content -ne $originalContent) {
                Set-Content -Path $file.FullName -Value $content -NoNewline
                $filesModified++
                $totalChanges += $changesInFile
                Write-Host "  $relativePath - $changesInFile changes" -ForegroundColor Green
            }
        }
    }
}

# Summary
Write-Host "`n=== SUMMARY ===" -ForegroundColor Magenta
Write-Host "Files modified: $filesModified" -ForegroundColor Green
Write-Host "Total changes: $totalChanges" -ForegroundColor Green
Write-Host ""

if ($totalChanges -gt 0) {
    Write-Host "URL consistency fixed!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Review changes: git diff" -ForegroundColor White
    Write-Host "2. Clean build: Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue" -ForegroundColor White
    Write-Host "3. Rebuild: npm run build" -ForegroundColor White
    Write-Host "4. Commit: git add . && git commit -m 'Fix: Add www to all URLs for consistency'" -ForegroundColor White
} else {
    Write-Host "No changes were needed - URLs are already consistent!" -ForegroundColor Cyan
}