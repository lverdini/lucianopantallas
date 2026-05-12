@echo off
REM Script para usar npm con Node.js portátil
set PATH=%USERPROFILE%\nodejs\node-v20.11.0-win-x64;%PATH%
"%USERPROFILE%\nodejs\node-v20.11.0-win-x64\npm.cmd" %*
