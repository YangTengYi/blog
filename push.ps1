# One-click push script for the blog repository
# Usage:  .\push.ps1                -> commit with default message and push
#         .\push.ps1 "my message"  -> commit with custom message and push

param(
    [string]$Message = ""
)

$ErrorActionPreference = "Stop"

# Always run from the repository root (where this script lives)
Set-Location -Path $PSScriptRoot

# Stage all changes (new, modified, deleted files)
git add -A

# Skip if there is nothing to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "Nothing to commit. Working tree clean." -ForegroundColor Yellow
    exit 0
}

# Build commit message: use parameter, otherwise fall back to timestamp
if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = "update: {0}" -f (Get-Date -Format "yyyy-MM-dd HH:mm")
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Push to GitHub (primary remote)
Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
git push github master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push to GitHub failed." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`nDone." -ForegroundColor Green
exit 0
