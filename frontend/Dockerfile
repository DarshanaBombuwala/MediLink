# Step 1: Use official Node.js image
FROM node:20 AS development

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies first
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Angular dev server port
EXPOSE 4200

# Run the Angular dev server (bind to all interfaces)
CMD ["npm", "start"]
