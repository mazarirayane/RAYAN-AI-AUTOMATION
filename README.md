# AI Automation & n8n Landing Page

Static responsive landing page for Rayan Mazari's AI Automation learning product.

## Netlify Drop

From the project root, run:

```bash
PORT=5173 BASE_PATH=/ pnpm --dir artifacts/ai-automation-landing build
```

Then drag `artifacts/ai-automation-landing/dist/public` into [Netlify Drop](https://app.netlify.com/drop).

## Netlify with Git

Connect this repository to Netlify. The root `netlify.toml` already configures the build command, publish directory, and SPA fallback redirect.

The page has no backend, database, authentication, runtime secrets, or environment variables. A custom domain is optional; Netlify's default subdomain works without extra configuration.