# Use the official Node.js image as the base image
FROM node:16

# Set the working directory for the application
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies (both backend and frontend dependencies)
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the port that the app will run on (Express server)
EXPOSE 3030

# Run the Express server (start both frontend and backend)
CMD ["npm", "start"]
