# Get latest
FROM node:latest

# Create app dir
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Copy dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# When Prod run
# RUN npm ci --only=production

COPY . /usr/src/app/

EXPOSE 3000
CMD ["npm", "start"]
