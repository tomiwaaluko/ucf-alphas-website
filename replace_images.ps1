# PowerShell script to replace all Unsplash URLs with placeholder.svg

# Read the file content
$content = Get-Content 'src\components\Lineage.tsx' -Raw

# Replace all Unsplash URLs with placeholder.svg
$content = $content -replace 'image:\s*[\r\n]+\s*"https://images\.unsplash\.com/[^"]*"', 'image: "/placeholder.svg"'

# Write back to file
Set-Content 'src\components\Lineage.tsx' -Value $content

Write-Host "Replacement completed for Lineage.tsx"

# Also replace in LineageDetail.tsx if needed
$detailContent = Get-Content 'src\pages\LineageDetail.tsx' -Raw
$detailContent = $detailContent -replace '"https://images\.unsplash\.com/[^"]*"', '"/placeholder.svg"'
Set-Content 'src\pages\LineageDetail.tsx' -Value $detailContent

Write-Host "Replacement completed for LineageDetail.tsx"
