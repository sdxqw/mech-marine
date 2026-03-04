# --- STEP 1: Installazione dipendenze ---
FROM node:20-alpine AS deps
# Compatibilità libc
RUN apk add --no-cache libc6-compat
# Aggiorna npm all'ultima versione stabile
RUN npm install -g npm@11.11.0

WORKDIR /app
# Copia package.json e package-lock.json
COPY package.json package-lock.json* ./
# Installa le dipendenze
RUN npm ci

# --- STEP 2: Build ---
FROM node:20-alpine AS builder
WORKDIR /app
# Copia node_modules dalla fase deps
COPY --from=deps /app/node_modules ./node_modules
# Copia tutto il progetto
COPY . .

# Disabilita telemetry Next.js
ENV NEXT_TELEMETRY_DISABLED 1
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

# Costruisci il progetto in modalità standalone
RUN npm run build

# --- STEP 3: Runner finale leggero ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Crea utente non root
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copia la build standalone completa
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/ ./
# Copia anche public e static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
# Avvia direttamente il server standalone
CMD ["node", "server.js"]
