# Deployment Guide for GitHub Pages

## The Problem
You're seeing a white page because GitHub Pages is trying to serve the source code (`.jsx` files) instead of the compiled/built JavaScript files. Vite needs to build the project first to generate browser-compatible files.

## Solution: Deploy the Built Files

### Option 1: Manual Deployment (Recommended)

1. **Build the project**:
   ```bash
   cd portfolio-website
   npm run build
   ```
   This creates a `dist` folder with production-ready files.

2. **Copy the dist folder contents to your bahaa-eddine.github.io repository**:
   ```bash
   # Navigate to your GitHub Pages repository
   cd /path/to/bahaa-eddine.github.io

   # Remove old files (except .git folder)
   rm -rf * (or manually delete all files except .git)

   # Copy new built files
   cp -r /path/to/portfolio-website/dist/* .
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy new portfolio website"
   git push origin main
   ```

### Option 2: Using the Deployment Script

I've created deployment scripts for you:

**For Git Bash/Linux/Mac**:
```bash
chmod +x deploy.sh
./deploy.sh
```

**For Windows Command Prompt**:
```cmd
deploy.bat
```

**Note**: You may need to edit the script to update your repository URL if it's different.

### Option 3: GitHub Actions (Automated Deployment)

Create a file `.github/workflows/deploy.yml` in your **portfolio-website** repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
```

Then configure your GitHub repository settings to serve from the `gh-pages` branch.

## Verifying the Build

After building, check that these files exist in the `dist` folder:
- `index.html` ✓
- `assets/` folder with CSS and JS files ✓
- `assets/img/logo_avatar.png` ✓

## Troubleshooting

### Issue: 404 on logo_avatar.png
- **Solution**: Make sure the `public/assets/img/logo_avatar.png` file exists before building
- The build process automatically copies files from `public/` to `dist/`

### Issue: Routes not working (404 on /resume or /research)
- **Solution**: Add a `404.html` file that redirects to `index.html`:
  ```bash
  cp dist/index.html dist/404.html
  ```
  This allows React Router to handle routing.

### Issue: Still seeing white page
- **Check browser console** for errors
- **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
- **Wait 1-2 minutes** for GitHub Pages to update

## Important Notes

1. **Always build before deploying**: Never deploy the source code, only the `dist` folder contents
2. **Base URL**: The `vite.config.js` is configured with `base: '/'` which is correct for `username.github.io`
3. **File structure**: The built files should be in the **root** of your `bahaa-eddine.github.io` repository, not in a subfolder

## Quick Deploy Checklist

- [ ] Build the project: `npm run build`
- [ ] Verify `dist` folder contains all files
- [ ] Copy `dist` contents to GitHub Pages repository
- [ ] Copy `dist/index.html` to `dist/404.html` for routing support
- [ ] Commit and push to GitHub
- [ ] Wait 1-2 minutes for deployment
- [ ] Clear browser cache and test
