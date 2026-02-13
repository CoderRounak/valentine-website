# 🚀 Deploy to GitHub Pages (Completely Free!)

## Super Simple - Just 3 Commands!

### Step 1: Push Changes to GitHub

```bash
cd frontend
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### Step 2: Install Deployment Tool

```bash
npm install
```

### Step 3: Deploy!

```bash
npm run deploy
```

That's it! Your site will be live at:
**https://coderrounak.github.io/valentine-website/**

---

## Alternative: Manual GitHub Pages Setup

If the npm deploy doesn't work:

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to your GitHub repository: https://github.com/CoderRounak/valentine-website

3. Click **"Settings"** → **"Pages"** (left sidebar)

4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**

5. Click **"Save"**

6. Wait 2-3 minutes

7. Your site will be at: **https://coderrounak.github.io/valentine-website/**

---

## Troubleshooting

### Site shows blank page?
The base-href might be wrong. Try:
```bash
ng build --configuration production --base-href /valentine-website/
```

### 404 error?
Make sure GitHub Pages is enabled in repository settings.

### Takes too long?
GitHub Pages can take 5-10 minutes for first deployment.

---

## Benefits of GitHub Pages

- ✅ Completely free
- ✅ No sign-up needed (you already have GitHub)
- ✅ Automatic HTTPS
- ✅ Easy to update (just run `npm run deploy`)
- ✅ No build limits

---

## Your Live URL

**https://coderrounak.github.io/valentine-website/**

Share it with your Valentine! 💕
