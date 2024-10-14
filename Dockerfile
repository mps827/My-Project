# Base image
FROM node:22-alpine3.19 AS base

# Install dependencies only when needed
FROM base AS deps

# Install essential packages, including libc6-compat
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package manager files
COPY package.json ./

# Install dependencies using npm install --force
RUN npm install --force

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Production image to serve the application
FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

# Install serve to serve the static files
RUN npm install -g serve

# Copy the exported static files from the builder stage
COPY --from=builder /app/out ./

# Use non-root user
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

# Expose the port that the application will run on
EXPOSE 3000 3001

# Serve the exported static files
CMD ["sh", "-c", "serve -s . -l 3000 & serve -s . -l 3001 --ssl-cert /app/certificate/cert.pem --ssl-key /app/certificate/privateKey.pem"]
