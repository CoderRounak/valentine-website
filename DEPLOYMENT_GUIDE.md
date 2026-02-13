# 🚀 Deployment Guide - Valentine's Day Balloon Pop Game

## Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your computer

---

## Step 1: Push to GitHub 📤

### Option A: Using Git Bash or Terminal (Recommended)

1. Open Git Bash or Terminal in the `frontend` folder
2. Run these commands:

```bash
git add .
git commit -m "Initial commit: Valentine's Day balloon pop game"
git push -u origin main
```

### Option B: If You Get Authentication Error

If you see an authentication error, you need to use a Personal Access Token:

1. Go to [GitHub.com](https://github.com) → Click your profile picture → Settings
2. Scroll down to "Developer settings" (left sidebar)
3. Click "Personal access tokens" → "Tokens (classic)"
4. Click "Generate new token" → "Generate new token (classic)"
5. Give it a name like "Valentine Website Deploy"
6. Check the "repo" checkbox (this gives full repository access)
7. Scroll down and click "Generate token"
8. **IMPORTANT**: Copy the token immediately (you won't see it again!)
9. When pushing to GitHub, use the token as your password

### Option C: Using GitHub Desktop (Easiest)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Browse to your `frontend` folder
5. Click "Publish repository"
6. Uncheck "Keep this code private" if you want it public
7. Click "Publish repository"

---

## Step 2: Deploy on Vercel 🌐

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

5. Once logged in:
   - Click "Add New..." button (top right)
   - Select "Project"
   - Find your repository: `CoderRounak/valentine-website`
   - Click "Import"

6. Configure the project:
   ```
   Framework Preset: Angular
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist/valentine-game
   Install Command: npm install
   ```

7. Click "Deploy"

8. Wait 2-3 minutes for the build to complete

9. You'll get a live URL like: `https://valentine-website-xyz.vercel.app`

### Method 2: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to frontend folder:
```bash
cd frontend
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy:
```bash
vercel
```

5. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **valentine-website**
   - In which directory is your code located? **./**
   - Want to override settings? **Y**
   - Build Command: **npm run build**
   - Output Directory: **dist/valentine-game**
   - Development Command: **npm start**

6. For production deployment:
```bash
vercel --prod
```

---

## Step 3: Verify Deployment ✅

1. Open the Vercel URL in your browser
2. Test the game:
   - Pop all 10 balloons
   - Click "Yes" to see the success screen
   - Try clicking "No" to see the funny popups
   - Test on mobile device for responsiveness

---

## Troubleshooting 🔧

### Build Fails on Vercel

**Error: "Cannot find module '@angular/cli'"**
- Solution: Vercel should auto-install. If not, check that `@angular/cli` is in `devDependencies` in `package.json`

**Error: "Output directory not found"**
- Solution: Make sure Output Directory is set to `dist/valentine-game` (not `dist/valentine-game/browser`)

### Git Push Fails

**Error: "remote: Permission denied"**
- Solution: Use a Personal Access Token instead of password (see Step 1, Option B)

**Error: "Updates were rejected because the remote contains work"**
- Solution: Run `git pull origin main --rebase` then `git push origin main`

### Page Shows 404 on Refresh

- Solution: The `vercel.json` file handles this. Make sure it exists in the `frontend` folder

---

## Custom Domain (Optional) 🌍

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update DNS records
5. Wait for DNS propagation (can take up to 48 hours)

---

## Updating Your Site 🔄

After making changes to your code:

1. Commit and push to GitHub:
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

2. Vercel will automatically detect the changes and redeploy!

---

## Environment Variables (If Needed) 🔐

If you add API keys or secrets later:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add your variables
4. Redeploy the project

---

## Performance Tips 🚀

Your site is already optimized, but here are some tips:

- ✅ Angular production build is already minified
- ✅ Vercel automatically serves via CDN
- ✅ Images are optimized
- ✅ CSS animations use GPU acceleration

---

## Support & Resources 📚

- [Vercel Documentation](https://vercel.com/docs)
- [Angular Documentation](https://angular.io/docs)
- [GitHub Documentation](https://docs.github.com)

---

## Quick Reference Commands 📝

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Check remote URL
git remote -v

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

## Success! 🎉

Once deployed, share your Valentine's Day game URL with your special someone! 💕

Your live site will be at: `https://your-project-name.vercel.app`

---

**Need Help?** 
- Check the Vercel deployment logs for detailed error messages
- Make sure all files are committed to GitHub
- Verify the build works locally with `npm run build`
