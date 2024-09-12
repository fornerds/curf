# Frontend Dockerfile
FROM node:20

# Set working directory
WORKDIR /app

# Copy all frontend files
COPY . /app

# Remove package-lock.json and node_modules
RUN rm -rf package-lock.json node_modules

# Install dependencies
RUN npm install

# Expose the app port
EXPOSE 3000

# Run React app
CMD ["npm", "start"]