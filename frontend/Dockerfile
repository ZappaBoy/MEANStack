FROM node:latest as builder

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i -g npm@latest && npm ci && npm audit fix

COPY . .

RUN npx ng build --prod frontend

FROM nginx

COPY --from=builder /usr/src/app/dist/frontend /usr/share/nginx/html
COPY nginx-proxy.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
