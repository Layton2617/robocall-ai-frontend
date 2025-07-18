# Deployment Guide

This guide covers how to deploy the RoboCall AI Frontend to various platforms.

## Deploy to Render (Recommended)

Render is a modern cloud platform that makes it easy to deploy static sites.

### Step 1: Prepare Your Repository

1. Push your code to GitHub
2. Ensure all files are committed and pushed

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

### Step 3: Create New Static Site

1. Click "New +" button in Render dashboard
2. Select "Static Site"
3. Connect your GitHub repository
4. Configure the following settings:
   - **Name**: robocall-ai-frontend (or your preferred name)
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

### Step 4: Deploy

1. Click "Create Static Site"
2. Render will automatically build and deploy your site
3. You'll get a live URL like: `https://robocall-ai-frontend.onrender.com`

### Step 5: Custom Domain (Optional)

1. Go to Settings in your Render dashboard
2. Add your custom domain
3. Configure DNS settings as instructed

## Deploy to Vercel

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
vercel --prod
```

Follow the prompts to configure your deployment.

## Deploy to Netlify

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder to deploy
3. Or connect your GitHub repository for automatic deployments

## Environment Variables

Currently, no environment variables are required for the frontend. If you need to configure API endpoints:

1. Create `.env` file in project root
2. Add your variables:
   ```
   VITE_API_URL=https://your-api-url.com
   ```
3. Update the code to use `import.meta.env.VITE_API_URL`

## Backend Integration

To integrate with the robo_calling_agent backend:

1. Deploy your backend service
2. Update API endpoints in the frontend components
3. Configure CORS settings in your backend
4. Set up authentication if required

## Troubleshooting

### Build Fails

- Check that all dependencies are listed in `package.json`
- Ensure Node.js version is 18 or higher
- Check for any TypeScript or linting errors

### Routing Issues

- Ensure your hosting platform supports SPA routing
- Configure redirects to `index.html` for all routes
- Check that `render.yaml` is properly configured

### Performance Issues

- Enable gzip compression on your hosting platform
- Consider implementing code splitting for large bundles
- Optimize images and assets

## Support

For deployment issues:
1. Check the platform-specific documentation
2. Review build logs for errors
3. Ensure all environment variables are set correctly

