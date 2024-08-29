# Joseph McCleery Resume Website

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Install the dependencies:

```bash
npm install
```

## Development Server

Copy `.env.example` and rename to `.env.local`.

Create ssl certificate for local development:

```bash
# Only need to run these once!

# Install mkcert globally
npm install -g mkcert

# Create ssl certificate
npm run proxy
```

Start the development server on `https://localhost:3000`

```bash
# Start dev server
npm run dev
```

## Production

Copy `.env.example` and rename to `.env` and remove `NODE_TLS_REJECT_UNAUTHORIZED=0`.

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Using Node.js deploy the generated folder .output

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Static deploy

To generate that static site:

```bash
npm run generate
```

Using your static site hosting of choice, deploy the generated folder `.output/public`.

To generate and deploy to a the gh-pages branch:

```bash
npm run deploy
```
