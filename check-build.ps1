# check-build.ps1
Write-Host "=== NEVLOH BUILD CHECKER ===" -ForegroundColor Magenta

# Check pages
Write-Host "`nChecking Pages:" -ForegroundColor Cyan
$pages = @(
    'index.js',
    'about.js',
    'services.js',
    'industries.js',
    'sustainability.js',
    'contact.js',
    'privacy.js',
    'terms.js',
    'blog.js'
)

$missing = @()
foreach ($page in $pages) {
    $path = "pages/$page"
    if (Test-Path $path) {
        Write-Host "  [OK] $page" -ForegroundColor Green
    } else {
        Write-Host "  [MISSING] $page" -ForegroundColor Red
        $missing += $page
    }
}

# Check service pages
Write-Host "`nChecking Service Pages:" -ForegroundColor Cyan
$services = @(
    'fleet-refuelling.js',
    'generator-refuelling.js',
    'on-site-fuel-delivery.js',
    'bulk-fuel.js',
    'haulage.js',
    'ulsd.js'
)

foreach ($service in $services) {
    $path = "pages/services/$service"
    if (Test-Path $path) {
        Write-Host "  [OK] services/$service" -ForegroundColor Green
    } else {
        Write-Host "  [MISSING] services/$service" -ForegroundColor Red
        $missing += "services/$service"
    }
}

# Check sitemap
Write-Host "`nSitemap Check:" -ForegroundColor Cyan
if (Test-Path public/sitemap.xml) {
    $urlCount = (Select-String -Path public/sitemap.xml -Pattern "<url>").Count
    Write-Host "  [OK] Found: $urlCount URLs" -ForegroundColor Green

    Write-Host "`n  URLs in sitemap:" -ForegroundColor Yellow
    $sitemapContent = Get-Content public/sitemap.xml -Raw
    $locPattern = '<loc>(.*?)</loc>'
    $locMatches = [regex]::Matches($sitemapContent, $locPattern)

    foreach ($match in $locMatches) {
        if ($match.Groups[1].Value) {
            Write-Host "    - $($match.Groups[1].Value)"
        }
    }
} else {
    Write-Host "  [MISSING] sitemap.xml NOT FOUND" -ForegroundColor Red
}

# Check robots.txt
Write-Host "`nrobots.txt Check:" -ForegroundColor Cyan
if (Test-Path public/robots.txt) {
    Write-Host "  [OK] Found" -ForegroundColor Green
} else {
    Write-Host "  [MISSING] NOT FOUND" -ForegroundColor Red
}

# Summary
Write-Host "`n=== SUMMARY ===" -ForegroundColor Magenta
if ($missing.Count -eq 0) {
    Write-Host "[SUCCESS] All pages exist!" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Missing $($missing.Count) pages:" -ForegroundColor Red
    $missing | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
}