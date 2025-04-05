# Step 1: Use an official Node.js image to build the app
FROM node:20 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 4200 for the Angular development server
EXPOSE 4200

# Run the Angular development server (npm start)
CMD ["npm", "start"]
