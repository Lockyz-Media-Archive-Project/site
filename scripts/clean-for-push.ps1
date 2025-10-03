# Clean generated artifacts before committing/pushing
Write-Host "Removing .open-next, node_modules, and package-lock.json (if present)"

if (Test-Path -Path .open-next) {
  Remove-Item -Recurse -Force .open-next
}

if (Test-Path -Path node_modules) {
  Remove-Item -Recurse -Force node_modules
}

if (Test-Path -Path package-lock.json) {
  Remove-Item -Force package-lock.json
}

Write-Host "Clean complete. You can now commit and push safely."
