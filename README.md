# Valentine's Day Balloon Pop Game 🎈💝

A fun interactive Valentine's Day game built with Angular where you pop balloons to reveal a special message!

## Features
- Interactive balloon popping animation
- Romantic Valentine's Day theme
- Responsive design
- Special message reveal after popping all balloons

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

3. Open your browser to `http://localhost:4200`

## Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New" → "Project"
4. Import your repository: `CoderRounak/valentine-website`
5. Configure the project:
   - **Framework Preset**: Angular
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/valentine-game`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

## GitHub Setup

If you haven't pushed to GitHub yet:

```bash
git add .
git commit -m "Initial commit: Valentine's Day balloon pop game"
git push -u origin main
```

**Note**: If you have 2FA enabled on GitHub, you'll need to use a Personal Access Token:
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
2. Generate new token with "repo" permissions
3. Use the token as your password when pushing

## Technologies Used
- Angular 17
- TypeScript
- CSS3 Animations
- HTML5

## License
MIT
