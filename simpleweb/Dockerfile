# Specify a base image
FROM node:alpine 

# Set default work directory
WORKDIR /usr/app

# Copy from local current directory to container current directory
COPY ./package.json ./

# Install some dependecies
RUN npm install

# Copy other project files
COPY ./ ./

# Default command
CMD ["npm", "start"]