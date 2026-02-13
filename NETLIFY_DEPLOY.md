# 🚀 Deploy to Netlify (Super Easy!)

## Step 1: Push Your Changes to GitHub

```bash
cd frontend
git add .
git commit -m "Add Netlify configuration"
git push origin main
```

## Step 2: Deploy on Netlify (3 minutes)

1. Go to: **https://www.netlify.com/**
2. Click **"Sign Up"** → Choose **"GitHub"**
3. Authorize Netlify to access your GitHub
4. Click **"Add new site"** → **"Import an existing project"**
5. Click **"Deploy with GitHub"**
6. Find and select: **CoderRounak/valentine-website**
7. Configure build settings:
   - **Branch to deploy**: `main`
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/valentine-game`
8. Click **"Deploy site"**

## Step 3: Wait & Get Your Link! 🎉

- Build takes 2-3 minutes
- You'll get a URL like: `https://random-name-123.netlify.app`
- Click "Site settings" → "Change site name" to customize it
- Example: `rounak-valentine.netlify.app`

## That's It! ✅

Your site is now live and will auto-deploy whenever you push to GitHub!

---

## Troubleshooting

### Build Fails?
Check the build logs in Netlify dashboard. Common fixes:
- Make sure `package.json` has all dependencies
- Verify build command is correct
- Check that output directory exists after build

### Site Shows 404?
- Make sure publish directory is `dist/valentine-game` (not `dist/valentine-game/browser`)
- Check that `netlify.toml` file exists in frontend folder

---

## Why Netlify Instead of Vercel?

- ✅ Easier setup for Angular
- ✅ Better error messages
- ✅ More reliable builds
- ✅ Free tier is generous
- ✅ Auto SSL certificates
- ✅ Custom domains easy to add

---

## Your Live URL

After deployment, your Valentine's game will be at:
`https://[your-site-name].netlify.app`

Share it with your Valentine! 💕
