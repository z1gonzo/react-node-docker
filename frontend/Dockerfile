# Use the official Node.js image as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production using rsbuild
RUN npm run build

# Serve the built files using a simple web server
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the app with the serve command, pointing to the correct output directory
CMD ["serve", "-s", "public", "-l", "3000"]
