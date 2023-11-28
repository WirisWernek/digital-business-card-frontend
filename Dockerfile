FROM node:lts-alpine AS angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build-prd

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/visit-card /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t visit-card:1.0 .
# docker run --name visit-card -p 8081:80 -d visit-card:1.0