# Deploying Rachel Foko Portfolio

The site is built and verified locally. Follow these steps to push it to GitHub (Lognetics) and deploy to Vercel.

## 1. Log in to GitHub CLI

```powershell
gh auth login
```

Choose:
- **GitHub.com**
- **HTTPS**
- **Login with a web browser** (it'll open your browser and ask you to paste a one-time code)

Then verify access to the Lognetics org:

```powershell
gh api user/orgs --jq '.[].login'
```

`Lognetics` should appear in the output. If not, you'll need to be invited as a member (Owner or with `repo` permission) before pushing.

## 2. Initialize git and create the repo

From inside `c:\Users\hp\Documents\Rachel Foko`:

```powershell
git init
git add .
git commit -m "Initial commit: Rachel Foko portfolio site"
git branch -M main

# Create the repo under Lognetics and push
gh repo create Lognetics/rachel-foko-portfolio --public --source=. --remote=origin --push
```

> If Lognetics isn't ready, push to your personal account first:
> `gh repo create rachel-foko-portfolio --public --source=. --remote=origin --push`
> then transfer to Lognetics later via the GitHub UI.

## 3. Log in to Vercel + deploy

```powershell
vercel login
```

Choose **Continue with GitHub** (opens browser).

Then from inside the project folder:

```powershell
vercel --prod
```

Answers:
- **Set up and deploy?** → Y
- **Which scope?** → choose your account (or Lognetics team if available)
- **Link to existing project?** → N
- **What's your project's name?** → `rachel-foko-portfolio`
- **In which directory is your code located?** → `./`
- **Want to modify settings?** → N (auto-detects Next.js)

You'll get a production URL like `https://rachel-foko-portfolio.vercel.app`. Share that. Done.

## 4. Optional: connect a custom domain

In the Vercel dashboard → Project → Settings → Domains → add `rachelfoko.com` (or any domain you own), then update DNS as Vercel instructs.
