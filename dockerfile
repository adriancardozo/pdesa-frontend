# Build stage
FROM node:22.13.0-alpine AS build
WORKDIR /app

# Get image arguments and set build environment variables
ARG VITE_SELF_VERSION="-"
ENV VITE_SELF_VERSION=${VITE_SELF_VERSION}

# Add dependencies to PATH
ENV PATH=/app/node_modules/.bin:$PATH

# Install dependencies and build project
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . ./

EXPOSE 80
CMD ["npx", "vite", "--host", "--port", "80", "--mode", "production"]
