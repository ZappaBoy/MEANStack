FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i -g npm@latest && npm ci && npm audit fix

COPY . .

EXPOSE 8888
CMD [ "npm", "run", "start"]
