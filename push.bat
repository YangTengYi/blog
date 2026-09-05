@echo off
title Blog One-Click Push
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push.ps1"
