@echo off

echo Building the project...
call npm run build

cd dist

echo Deploying to GitHub Pages...

git init
git checkout -b main
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:bahaa-eddine/bahaa-eddine.github.io.git main

cd ..

echo Deployment complete!
pause
