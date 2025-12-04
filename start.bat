@echo off
setlocal
cd /d "%~dp0"
set TARGET=index.html
if not exist "%TARGET%" (
  echo Kunne ikke finde %TARGET% i %~dp0
  exit /b 1
)
start "" "%TARGET%"
echo Åbnede %TARGET% i din standardbrowser. Hvis den ikke starter, højreklik og vælg "Åbn med" og din browser.
