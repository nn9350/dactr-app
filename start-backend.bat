@echo off
echo ========================================
echo  Starting Dactr Backend Server
echo ========================================
echo.

cd backend

echo Checking for node_modules...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies already installed.
)

echo.
echo Starting backend server...
echo Backend will run at: http://localhost:3000
echo API Health check: http://localhost:3000/api/health
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start
