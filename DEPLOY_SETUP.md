# Automatic Demo Deployment Setup

This guide explains how to set up automatic deployment of the design-tokens demo to GitHub Pages after each npm publish.

## What's Been Configured

✅ **GitHub Actions Workflow** (`.github/workflows/publish-and-deploy.yml`)
- Detects version changes in `package.json`
- Publishes to npm when version changes
- Automatically deploys demo to GitHub Pages after successful publish

✅ **Vite Configuration** (`demo/vite.config.ts`)
- Sets correct base path for GitHub Pages (`/design-tokens/`)

✅ **Build Scripts** (`package.json`)
- `pnpm build` - Builds the package
- `pnpm build:demo` - Builds the demo

## Required Setup Steps

### 1. Create NPM Token

1. Go to [npmjs.com](https://www.npmjs.com) and log in
2. Click your profile → **Access Tokens**
3. Click **Generate New Token** → **Classic Token**
4. Select **Automation** type
5. Copy the token (starts with `npm_...`)

### 2. Add GitHub Secrets

1. Go to your GitHub repository: `https://github.com/AliSafari-IT/design-tokens`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add secret:
   - **Name**: `NPM_TOKEN`
   - **Value**: Paste your npm token
5. Click **Add secret**

### 3. Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under **Source**, select:
   - **Source**: GitHub Actions
3. Save the settings

### 4. Configure Repository Permissions

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## How It Works

### Automatic Trigger
When you push a commit that changes the version in `package.json`:

```bash
# Example: Bump version and push
npm version patch  # or minor, or major
git push origin main
```

The workflow will:
1. ✅ Detect version change
2. ✅ Install dependencies
3. ✅ Build the package
4. ✅ Publish to npm
5. ✅ Build the demo
6. ✅ Deploy to GitHub Pages

### Manual Trigger
You can also manually trigger the workflow:

1. Go to **Actions** tab in GitHub
2. Select **Publish to npm and Deploy Demo**
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## Demo URL

After successful deployment, your demo will be available at:

**https://alisafari-it.github.io/design-tokens/**

## Publishing Workflow

### Standard Release Process

```bash
# 1. Make your changes
git add .
git commit -m "feat: add new tokens"

# 2. Bump version (this updates package.json)
npm version patch  # 0.4.2 → 0.4.3
# or
npm version minor  # 0.4.2 → 0.5.0
# or
npm version major  # 0.4.2 → 1.0.0

# 3. Push (triggers workflow)
git push origin main
git push --tags

# 4. Wait for GitHub Actions to complete
# - Check Actions tab for progress
# - Demo will be live at GitHub Pages URL
```

### Version Bump Guidelines

- **Patch** (0.4.2 → 0.4.3): Bug fixes, minor updates
- **Minor** (0.4.2 → 0.5.0): New features, backward compatible
- **Major** (0.4.2 → 1.0.0): Breaking changes

## Troubleshooting

### Workflow Fails on Publish
- **Check**: NPM_TOKEN secret is set correctly
- **Check**: Token has automation permissions
- **Check**: You're logged in to npm with correct account

### Workflow Fails on Deploy
- **Check**: GitHub Pages is enabled with "GitHub Actions" source
- **Check**: Workflow has write permissions
- **Check**: Repository is public (or you have GitHub Pro for private repos)

### Demo Shows 404
- **Check**: Base path in `vite.config.ts` matches repository name
- **Check**: `demo/dist` folder was created during build
- **Check**: GitHub Pages deployment completed successfully

### Version Not Detected
- **Check**: You actually changed the version in `package.json`
- **Check**: You pushed to `main` branch
- **Check**: Workflow file is in `.github/workflows/` directory

## Testing Locally

Before pushing, test the demo build locally:

```bash
# Build the demo
cd demo
NODE_ENV=production pnpm build

# Preview the build
pnpm preview
```

## Monitoring

### Check Workflow Status
1. Go to **Actions** tab in GitHub
2. Click on the latest workflow run
3. View logs for each job (check-version, publish, deploy-demo)

### Check npm Package
Visit: https://www.npmjs.com/package/@asafarim/design-tokens

### Check GitHub Pages
Visit: https://alisafari-it.github.io/design-tokens/

## Notes

- The workflow only runs when `package.json` version changes
- Demo deployment happens **after** successful npm publish
- If publish fails, demo won't be deployed
- Each deployment overwrites the previous demo
- GitHub Pages may take 1-2 minutes to update after deployment

## Support

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Verify all secrets and permissions are set correctly
3. Ensure the repository name matches the base path in vite.config.ts
