# Åbner siden lokalt i din standardbrowser
$here = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $here
$index = Join-Path $here 'index.html'

if (-not (Test-Path $index)) {
  Write-Error "Kunne ikke finde index.html i $here"
  exit 1
}

Write-Host "Åbner" $index "i din standardbrowser..."
Start-Process $index

Write-Host "Hvis du hellere vil starte en lille server:"
Write-Host "  py -m http.server 8000 --directory '$here'"
Write-Host "og gå til http://localhost:8000"
