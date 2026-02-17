# Use official Node.js LTS image with pnpm
FROM node:20-alpine

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@8.15.5 --activate

# Set working directory
WORKDIR /usr/src/app

# Copy package manager files first for better caching
COPY package.json pnpm-lock.yaml ./

# Force a clean install of all dependencies (including devDependencies and hoist for workspace compatibility)
RUN pnpm install --dev --shamefully-hoist --force

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 4000

# Start the backend in development mode (change to 'start' for production)
CMD ["pnpm", "run", "dev"]
