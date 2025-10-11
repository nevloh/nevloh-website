# check-build.ps1
Write-Host "=== NEVLOH BUILD CHECKER ===" -ForegroundColor Magenta

# Check pages
Write-Host "`n📄 Checking Pages:" -ForegroundColor Cyan
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
        Write-Host "  ✅ $page" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $page" -ForegroundColor Red
        $missing += $page
    }
}

# Check service pages
Write-Host "`n📄 Checking Service Pages:" -ForegroundColor Cyan
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
        Write-Host "  ✅ services/$service" -ForegroundColor Green
    } else {
        Write-Host "  ❌ services/$service" -ForegroundColor Red
        $missing += "services/$service"
    }
}

# Check sitemap
Write-Host "`n📊 Sitemap Check:" -ForegroundColor Cyan
if (Test-Path public/sitemap.xml) {
    $urlCount = (Select-String -Path public/sitemap.xml -Pattern "<url>").Count
    Write-Host "  ✅ Found: $urlCount URLs" -ForegroundColor Green

    Write-Host "`n  URLs in sitemap:" -ForegroundColor Yellow
    Select-String -Path public/sitemap.xml -Pattern "<loc>(.*?)</loc>" | ForEach-Object {
        if ($_.Matches[0].Groups[1].Value) {
            Write-Host "    - $($_.Matches[0].Groups[1].Value)"
        }
    }
} else {
    Write-Host "  ❌ sitemap.xml NOT FOUND" -ForegroundColor Red
}

# Check robots.txt
Write-Host "`n🤖 robots.txt Check:" -ForegroundColor Cyan
if (Test-Path public/robots.txt) {
    Write-Host "  ✅ Found" -ForegroundColor Green
} else {
    Write-Host "  ❌ NOT FOUND" -ForegroundColor Red
}

# Summary
Write-Host "`n=== SUMMARY ===" -ForegroundColor Magenta
if ($missing.Count -eq 0) {
    Write-Host "✅ All pages exist!" -ForegroundColor Green
} else {
    Write-Host "❌ Missing $($missing.Count) pages:" -ForegroundColor Red
    $missing | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
}