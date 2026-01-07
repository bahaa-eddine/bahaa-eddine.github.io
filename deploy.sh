#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Navigate to the build output directory
cd dist

# Initialize git if not already initialized
if [ ! -d .git ]; then
  git init
  git checkout -b main
fi

# Add all files
git add -A

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to GitHub Pages repository
# Replace with your repository URL
git push -f git@github.com:bahaa-eddine/bahaa-eddine.github.io.git main

cd ..

echo "Deployment complete!"
