FROM node:14 as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npx ng build --prod frontend

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
