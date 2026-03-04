# Website Template

This project is ready to run with Docker and auto-deploy from GitHub Actions.

## 1) Local run with Docker

From the project root:

```bash
docker compose up --build
```

Open `http://localhost:3000`.

To stop:

```bash
docker compose down
```

## 2) Prepare production server (one time)

On your Linux server:

1. Install Docker + Docker Compose plugin.
2. Create deploy directory (example):

```bash
mkdir -p /opt/web-services/website-template
cd /opt/web-services/website-template
git clone <your-repo-url> .
git init
```

3. (Recommended) Create `.env` in the same folder for secrets:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=put-a-long-random-secret-here
```

For local Docker development, use:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=put-a-long-random-secret-here
```

Generate a random key with:

```bash
openssl rand -base64 32
```

## 3) Configure GitHub Actions secrets

In GitHub: **Repository -> Settings -> Secrets and variables -> Actions**

Add these repository secrets:

- `DEPLOY_HOST`: your server IP or domain
- `DEPLOY_USER`: SSH user (recommended non-root deploy user)
- `DEPLOY_PORT`: SSH port (usually `22`)
- `DEPLOY_PATH`: folder on server (example `/opt/web-services/website-template`)
- `SSH_PRIVATE_KEY`: private key matching a public key in your server user's `~/.ssh/authorized_keys`

## 4) Deploy flow

Every push to `main` triggers `.github/workflows/deploy.yml`.

The workflow will:

1. SSH into your server
2. Pull latest `main`
3. Rebuild with Docker
4. Restart containers
5. Clean old images

You can also trigger it manually from the **Actions** tab using `workflow_dispatch`.

## 5) Useful commands

Local logs:

```bash
docker compose logs -f
```

Server logs (inside deploy path):

```bash
docker compose logs -f --tail=200
```

Rebuild cleanly:

```bash
docker compose build --no-cache
docker compose up -d
```
