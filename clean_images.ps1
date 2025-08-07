# Read the file content
$content = Get-Content 'src\components\Lineage.tsx' -Raw

# Replace all the specific patterns
$patterns = @(
    'image:\s*\r?\n\s*"https://images\.unsplash\.com/[^"]*",'
)

foreach ($pattern in $patterns) {
    $content = $content -replace $pattern, 'image: "/placeholder.svg",'
}

# Write back to file
$content | Set-Content 'src\components\Lineage.tsx'

Write-Host "All Unsplash URLs replaced with placeholder.svg"
