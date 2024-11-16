@echo off
REM Create project structure
mkdir notebooks 2>nul
mkdir animations 2>nul
mkdir webapp 2>nul
mkdir webapp\src 2>nul
mkdir webapp\public 2>nul
mkdir data 2>nul

REM Set up Python virtual environment if it doesn't exist
if not exist venv (
    python -m venv venv
)

REM Activate virtual environment and install dependencies
call venv\Scripts\activate.bat

REM Install Python dependencies
pip install numpy torch matplotlib jupyter manim
pip install streamlit

REM Install Node.js dependencies for webapp
cd webapp
if not exist package.json (
    echo { "name": "tensortium-webapp", "version": "1.0.0" } > package.json
    npm init -y
    npm install react react-dom @types/react @types/react-dom typescript plotly.js-dist-min @types/plotly.js
)

cd ..
echo Setup completed successfully!
pause
