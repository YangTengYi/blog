# ============================================================
#  Firefly Blog - 一键部署脚本
#  用法：在项目根目录执行 ./deploy.ps1 或双击 deploy.bat
# ============================================================

$ErrorActionPreference = "Stop"

# 项目根目录
$PROJECT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $PROJECT_DIR

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Firefly Blog - 一键部署到阿里云 OSS" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# ===== 第 1 步：构建 =====
Write-Host "[1/3] 构建博客..." -ForegroundColor Yellow
pnpm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "构建失败！请检查错误信息。" -ForegroundColor Red
    exit 1
}
Write-Host "构建成功！" -ForegroundColor Green
Write-Host ""

# ===== 第 2 步：上传到 OSS =====
Write-Host "[2/3] 上传到阿里云 OSS..." -ForegroundColor Yellow

$OSS_BUCKET = "xuwupiaomiao-blog"
$OSS_ENDPOINT = "oss-cn-beijing.aliyuncs.com"

./ossutil.exe cp -rf dist/ "oss://$OSS_BUCKET/" `
    -e $OSS_ENDPOINT `
    --config-file .ossutilconfig `
    --update

if ($LASTEXITCODE -ne 0) {
    Write-Host "上传失败！请检查错误信息。" -ForegroundColor Red
    exit 1
}
Write-Host "上传成功！" -ForegroundColor Green
Write-Host ""

# ===== 第 3 步：完成 =====
Write-Host "[3/3] 部署完成！" -ForegroundColor Green
Write-Host ""
Write-Host "访问地址: https://$OSS_BUCKET.$OSS_ENDPOINT/index.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  部署完成！🎉" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
