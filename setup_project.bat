@echo off
setlocal enabledelayedexpansion

:: Перевірка аргументу
if "%~1"=="" (
    echo Помилка: вкажіть URL репозиторію.
    exit /b 1
)
set REPO_URL=%~1

:: 1. Перевірка наявності NVM
echo Перевірка NVM...
where nvm >nul 2>nul
if %errorlevel% neq 0 (
    echo Помилка: NVM не знайдено. Будь ласка, встановіть NVM для Windows.
    exit /b 1
)

:: 2. Перевірка версії Node.js через NVM
echo Перевірка версії Node.js...
for /f "tokens=1,2,3 delims=v." %%a in ('node -v 2^>nul') do (
    set NODE_MAJOR=%%a
)

if "%NODE_MAJOR%"=="" set NODE_MAJOR=0

if %NODE_MAJOR% LSS 20 (
    echo Поточна версія (!NODE_MAJOR!) менша за 20. Встановлюємо Node.js 20 через NVM...

    :: Встановлюємо версію 20 (LTS або останню доступну 20.x)
    call nvm install 20
    echo Перемикання на Node.js 20...
    call nvm use 20
) else (
    echo Node.js вже версії %NODE_MAJOR% або новіше.
)

:: 3. Встановлення залежностей та білд
echo Запуск npm install...
call npm install

echo Запуск npm run build...
call npm run build

:: 4. Робота з Git
echo Ініціалізація Git...
if not exist .git (
    git init
    git branch -M main
)

:: Додаємо або оновлюємо remote origin
git remote add origin %REPO_URL% 2>nul
if %errorlevel% neq 0 (
    git remote set-url origin %REPO_URL%
)

echo Додавання файлів, комміт та пуш...
git add .
git commit -m "Auto-deploy commit"
git push -u origin main --force

:: 5. Деплой
echo Запуск npm run deploy...
call npm run deploy

echo ---
echo Все готово!
pause