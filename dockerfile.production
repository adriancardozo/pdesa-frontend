# Build stage
FROM node:22.13.0-alpine AS build
WORKDIR /app

# Get image arguments and set build environment variables
ARG VITE_BACKEND_URL
ARG VITE_SELF_VERSION="-"
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_SELF_VERSION=${VITE_SELF_VERSION}

# Add dependencies to PATH
ENV PATH=/app/node_modules/.bin:$PATH

# Install dependencies and build project
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# Production stage
FROM nginx:stable-alpine AS production

# Copy build files to production stage
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]