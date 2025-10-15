@echo off
echo.
echo ===================================================
echo    UCF Alphas Contact Form Quick Setup
echo ===================================================
echo.

REM Check if .env exists
if exist ".env" (
    echo [INFO] .env file already exists!
    echo.
    choice /C YN /M "Do you want to recreate it"
    if errorlevel 2 goto :end
    if errorlevel 1 del ".env"
)

REM Copy the example file
if not exist ".env.example" (
    echo [ERROR] .env.example file not found!
    pause
    exit /b 1
)

copy ".env.example" ".env" >nul
echo [OK] Created .env file
echo.

echo ===================================================
echo    Configuration Instructions
echo ===================================================
echo.
echo The .env file has been created.
echo Please edit it with your configuration:
echo.
echo 1. RESEND_API_KEY
echo    - Get from: https://resend.com/api-keys
echo    - Should start with "re_"
echo.
echo 2. TO_EMAIL
echo    - Where you want to receive contact form emails
echo    - Example: info@ucfalphas.org
echo.
echo 3. FROM_EMAIL
echo    - Quick testing: onboarding@resend.dev
echo    - Production: your-verified-domain@ucfalphas.org
echo.
echo Opening .env file for editing...
echo.

REM Try to open with default text editor
if exist ".env" (
    notepad ".env"
)

echo.
echo ===================================================
echo    Next Steps
echo ===================================================
echo.
echo After editing .env file:
echo.
echo 1. Install dependencies:
echo    npm install
echo.
echo 2. Start frontend (Terminal 1):
echo    npm run dev
echo.
echo 3. Start API server (Terminal 2):
echo    npm run dev:api
echo.
echo 4. Test the API:
echo    npm run test:contact
echo.
echo For detailed help, see: CONTACT_FIX_GUIDE.md
echo.

:end
pause
