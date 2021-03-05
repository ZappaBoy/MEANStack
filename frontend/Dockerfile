FROM node:14 as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npx ng build --prod frontend

FROM nginx

COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
