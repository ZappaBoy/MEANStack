FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install && npm audit fix

COPY . .

EXPOSE 8888
CMD [ "npm", "run", "dev" ]
