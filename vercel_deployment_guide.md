# Vercel Hobby Tier Deployment Guide

This guide outlines the steps to deploy your **v2 "Terminal Glass"** portfolio website to Vercel's Hobby Tier for free.

---

## 🛠️ Step 1: Push Your Code to GitHub

Vercel integrates seamlessly with GitHub to enable continuous deployment (automatic building and deploying every time you push code).

1. Initialize a Git repository in your workspace root (if not already done):
   ```bash
   git init
   ```
2. Commit your workspace files:
   ```bash
   git add .
   git commit -m "feat: complete v2 terminal glass portfolio implementation"
   ```
3. Create a new repository on GitHub (keep it public or private) and add the remote:
   ```bash
   git remote add origin https://github.com/MorfidisJ/Ioannis-Morfidis.git
   git branch -M main
   git push -u origin main
   ```

---

## 🚀 Step 2: Deploy on Vercel (Hobby Tier)

1. Go to [Vercel](https://vercel.com/) and sign up or log in using your **GitHub account**.
2. On your Vercel Dashboard, click **Add New** -> **Project**.
3. Import your repository `Ioannis-Morfidis` from the listed GitHub repositories.
4. Configure the Project Settings:
   - **Framework Preset**: Select **Vite** (Vercel should automatically detect this).
   - **Root Directory**: `./` (Keep default).
   - **Build Command**: `npm run build` (Keep default).
   - **Output Directory**: `dist` (Keep default).
5. **Add Environment Variables**:
   Under the **Environment Variables** section, add your Web3Forms access key so Vercel can securely read it during building:
   - **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: `8f9448c6-b6b5-4cbb-9121-a3a90ce44e51`
   - Click **Add**.
6. Click **Deploy**. Vercel will build your React application in less than a minute.

---

## 🔗 Step 3: Configure Your Domain

Once the deployment completes, Vercel will assign a random subdomain (e.g., `ioannis-morfidis-xyz.vercel.app`). To set up your desired URL:

1. In your Vercel Project dashboard, go to the **Settings** tab.
2. Click **Domains** on the left menu.
3. In the input field, enter `ioannis-morfidis.vercel.app` and click **Add**.
4. Vercel will automatically configure the SSL certificate and route your site to this address.

---

## 🔄 Automatic Redeployments
Any time you make updates to your source files:
1. Commit the changes and push to GitHub:
   ```bash
   git add .
   git commit -m "minor tweaks"
   git push
   ```
2. Vercel will instantly detect the push, trigger a production build, and update your live site without any downtime.
