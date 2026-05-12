$uiDir = "src\components\ui"
Get-ChildItem -Path $uiDir -Filter "*.tsx" | ForEach-Object {
    $txsFile = $_.FullName
    $jsxFile = $txsFile -replace '\.tsx$', '.jsx'
    $content = Get-Content -Path $txsFile -Raw
    
    # Remove "use client" directive
    $content = $content -replace '"use client";\s*\n\n?', ''
    
    # Remove type annotations - React.ComponentProps<...>
    $content = $content -replace ':\s*React\.ComponentProps<[^>]+>', ''
    
    # Remove VariantProps type annotations
    $content = $content -replace '&\s*VariantProps<[^>]+>', ''
    $content = $content -replace ':\s*VariantProps<[^>]+>', ''
    
    # Remove type keyword from imports
    $content = $content -replace '\btype\s+', ''
    
    # Write new JSX file
    Set-Content -Path $jsxFile -Value $content -Encoding UTF8
    Write-Host "Created: $(Split-Path -Leaf $jsxFile)"
}
Write-Host "Conversion complete!"
