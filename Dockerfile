FROM node:20.14.0-alpine as builder

WORKDIR /app

COPY ./package*.json ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build



FROM nginx:1.26.2-alpine as server

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/certs /etc/ssl

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]
