FROM node:latest as builder

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i -g npm && npm ci && npm audit fix

COPY . .

RUN npx ng build --prod frontend

FROM nginx

COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
