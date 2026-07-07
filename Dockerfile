# Build stage
# Use a Debian Bullseye slim image to pick up newer security fixes
FROM node:20-alpine AS builder

WORKDIR /app

# copy lockfile to ensure reproducible, secure installs
COPY package.json package-lock.json ./

# use npm ci for clean, deterministic install
RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM nginx:stable-alpine

COPY --from=builder /app/dist/bank-app-frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]