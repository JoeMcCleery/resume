# Joseph McCleery Resume Website

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Copy ".env.example" and rename to ".env.local".

Create ssl certificate for local development:

```bash
# Create ssl certificate (only need to run once)
npm run proxy
```

Start the development server on `https://localhost:3000`

```bash
# Start dev server
npm run dev
```

## Production

Copy ".env.example" and rename to ".env" and remove NODE_TLS_REJECT_UNAUTHORIZED=0.

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
