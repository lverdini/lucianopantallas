# Script para ejecutar npm con Node.js portátil
$env:Path = "$env:USERPROFILE\nodejs\node-v20.11.0-win-x64;$env:Path"
& "$env:USERPROFILE\nodejs\node-v20.11.0-win-x64\npm.cmd" @args
