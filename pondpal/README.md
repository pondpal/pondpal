# 🐟 Pond Pal

Friendly koi & aquarium care, powered by AI.

## What this is
A Next.js website with two AI-powered tools:
- **Tank Size Checker** — analyzes whether your pond or tank is right for your fish
- **Water Chemistry Analyzer** — diagnoses water test results and gives exact fix instructions

## Deploying to Vercel (step by step)

### Step 1 — Upload to GitHub
1. Go to github.com and sign in
2. Click the **+** button → **New repository**
3. Name it `pondpal`, set it to Public, click **Create repository**
4. Upload all these files by dragging them into the GitHub interface

### Step 2 — Deploy on Vercel
1. Go to vercel.com and sign in
2. Click **Add New Project**
3. Select your `pondpal` GitHub repository
4. Click **Deploy** — Vercel handles everything automatically!

### Step 3 — Add your Anthropic API Key
1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Add a new variable:
   - Name: `pp_api`
   - Value: your API key from console.anthropic.com
3. Click **Save** then **Redeploy**

### Step 4 — Connect your domain (pondpal.space)
1. In Vercel → **Settings** → **Domains**
2. Type `pondpal.space` and click **Add**
3. Vercel will give you DNS records to add in Namecheap
4. In Namecheap → **Domain List** → **Manage** → **Advanced DNS**
5. Add the records Vercel shows you (usually 2 CNAME records)
6. Wait 10–30 minutes for it to go live!

## Environment Variables needed
- `pp_api` — get from console.anthropic.com

## Tech Stack
- Next.js 14
- Anthropic Claude API
- Deployed on Vercel (free tier)
- No database needed for Phase 1
