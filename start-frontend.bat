@echo off
echo ========================================
echo  Starting Dactr Frontend
echo ========================================
echo.
echo Frontend will run at: http://localhost:8000
echo.
echo Make sure backend is running first!
echo (Double-click start-backend.bat in another window)
echo.
echo Press Ctrl+C to stop the server
echo.

cd public
python -m http.server 8000
