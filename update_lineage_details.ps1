# PowerShell script to update LineageDetail.tsx images for lines from 1979 through Fall 2010

$filePath = "c:\Users\gokug\OneDrive\Documents\GitHub\xi-iota-beacon-site\src\pages\LineageDetail.tsx"
$newImagePath = "/lovable-uploads/105ac18a-2fb8-4c53-8a52-f90f03c7cee1.png"

# Read the file content
$content = Get-Content $filePath -Raw

# Replace placeholder.svg with the new image path for all occurrences
$updatedContent = $content -replace 'image: "/placeholder\.svg"', ('image: "' + $newImagePath + '"')

# Write the updated content back to the file
$updatedContent | Out-File $filePath -Encoding UTF8 -NoNewline

Write-Host "Updated all placeholder.svg images in LineageDetail.tsx to use $newImagePath"
