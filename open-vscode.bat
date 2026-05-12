@echo off
REM Buscar VS Code en la ruta típica
if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Microsoft VS Code\Code.exe" (
    start "" "C:\Users\%USERNAME%\AppData\Local\Programs\Microsoft VS Code\Code.exe" "%CD%"
) else if exist "C:\Program Files\Microsoft VS Code\Code.exe" (
    start "" "C:\Program Files\Microsoft VS Code\Code.exe" "%CD%"
) else if exist "C:\Program Files (x86)\Microsoft VS Code\Code.exe" (
    start "" "C:\Program Files (x86)\Microsoft VS Code\Code.exe" "%CD%"
) else (
    echo VS Code no encontrado. Por favor, instálalo o ajusta la ruta en este archivo.
    pause
)
