# AI Automation & n8n landing page

Static React/Vite landing page for Rayan Mazari's AI Automation learning path.

## Netlify Drop

From the repository root, run `PORT=5173 BASE_PATH=/ pnpm --dir artifacts/ai-automation-landing build`, then drag the generated `artifacts/ai-automation-landing/dist/public` folder into [Netlify Drop](https://app.netlify.com/drop).

## Git deployment

Connect the repository in Netlify and use the settings in `netlify.toml`. The build command produces `dist/public`; it is not committed to the repository.

There are no environment variables, runtime secrets, API calls, database, or authentication requirements. A custom domain is optional; the default Netlify subdomain works without additional configuration.