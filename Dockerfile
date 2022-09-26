FROM node:15.8.0

ENV PORT 3000

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

RUN ls -la /usr/src/app

# Building app
RUN npm run build

EXPOSE 3000

RUN npm install -g serve

# Running the app
CMD "serve" "-s" "build"