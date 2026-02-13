# 📋 Deployment Checklist

Use this checklist to ensure everything is ready for deployment!

## Pre-Deployment Checklist ✅

### Files & Configuration
- [x] `package.json` exists with correct dependencies
- [x] `angular.json` configured properly
- [x] `vercel.json` created with correct settings
- [x] `.gitignore` created to exclude node_modules and build files
- [x] `README.md` created with project documentation
- [x] All source files in `src/` folder
- [x] Assets (images) in `src/assets/` folder

### Git Repository
- [ ] Git initialized in frontend folder
- [ ] Remote repository added (https://github.com/CoderRounak/valentine-website.git)
- [ ] All files committed
- [ ] Pushed to GitHub main branch

### Testing
- [ ] Game works locally (`npm start`)
- [ ] All 10 balloons can be popped
- [ ] "Yes" button shows success screen
- [ ] "No" button shows popup messages
- [ ] Final screen appears after multiple "No" clicks
- [ ] Responsive on mobile devices
- [ ] No console errors

### Vercel Setup
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Repository imported to Vercel
- [ ] Build settings configured:
  - Framework: Angular
  - Root Directory: frontend
  - Build Command: npm run build
  - Output Directory: dist/valentine-game
- [ ] Deployment successful
- [ ] Live URL works

## Quick Commands Reference

### Local Testing
```bash
cd frontend
npm install
npm start
# Open http://localhost:4200
```

### Build Test
```bash
npm run build
# Check that dist/valentine-game folder is created
```

### Git Commands
```bash
git status                    # Check what files changed
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push origin main          # Push to GitHub
```

### Vercel CLI (Optional)
```bash
npm install -g vercel         # Install Vercel CLI
vercel login                  # Login to Vercel
vercel                        # Deploy preview
vercel --prod                 # Deploy to production
```

## Deployment Steps (Quick Version)

1. **Push to GitHub**
   ```bash
   cd frontend
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to vercel.com
   - Import repository
   - Configure settings
   - Deploy!

3. **Test Live Site**
   - Open Vercel URL
   - Test all features
   - Share with your Valentine! 💕

## Troubleshooting Quick Fixes

### Build Fails
- Check `package.json` has all dependencies
- Verify `angular.json` output path is correct
- Check Vercel build logs for specific errors

### Git Push Fails
- Use Personal Access Token instead of password
- Check remote URL: `git remote -v`
- Try: `git pull origin main --rebase` then push again

### Site Not Loading
- Check Vercel deployment status
- Verify `vercel.json` exists
- Check browser console for errors

## Post-Deployment

- [ ] Test live URL on desktop
- [ ] Test live URL on mobile
- [ ] Share URL with your Valentine
- [ ] Celebrate! 🎉

---

**Current Status:** Ready for deployment! All files are configured correctly.

**Next Step:** Push to GitHub and deploy on Vercel following the DEPLOYMENT_GUIDE.md

**Estimated Time:** 10-15 minutes for first deployment
