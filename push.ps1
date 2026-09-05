# ============================================
#          博客一键推送 GitHub
# ============================================
$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "         博客一键推送 GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ---------- 定位 git ----------
$gitExe = "git"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    $candidates = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
    )
    $found = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
    if ($found) { $gitExe = $found }
    else {
        Write-Host "[错误] 未找到 Git，请先安装 Git for Windows" -ForegroundColor Red
        Read-Host "按回车键退出"
        exit 1
    }
}

# ---------- 检查是否为 git 仓库 ----------
& $gitExe rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 当前目录不是 git 仓库" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit 1
}

# ---------- 检查是否有更改 ----------
$status = & $gitExe status --porcelain
if (-not $status) {
    Write-Host "[提示] 没有检测到任何更改，无需推送" -ForegroundColor Yellow
    Start-Sleep -Seconds 3
    exit 0
}

Write-Host "[1/3] 检测到以下更改:"
Write-Host $status
Write-Host ""

$msg = Read-Host "请输入提交信息 (直接回车使用默认)"
if (-not $msg) { $msg = "更新内容 $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

# ---------- 提交 ----------
Write-Host ""
Write-Host "[2/3] 提交更改..." -ForegroundColor Cyan
& $gitExe add -A
& $gitExe commit -m $msg
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 提交失败" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit 1
}

# ---------- 推送 ----------
Write-Host ""
Write-Host "[3/3] 推送到 GitHub..." -ForegroundColor Cyan
& $gitExe push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "[错误] 推送失败！" -ForegroundColor Red
    Write-Host "可能原因: 网络波动导致 GitHub 通道暂时中断，请稍后重试" -ForegroundColor Yellow
    Read-Host "按回车键退出"
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  推送成功!  $(Get-Date -Format 'yyyy-MM-dd HH:mm')" -ForegroundColor Green
Write-Host "  仓库: https://github.com/YangTengYi/blog" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Start-Sleep -Seconds 5
