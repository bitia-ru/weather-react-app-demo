FROM node:11-alpine AS builder

RUN npm config set unsafe-perm true

COPY . /app
WORKDIR /app

RUN npm i --production

ARG apiUrl
ENV API_URL ${apiUrl}

RUN npm run build --development

FROM nginx:1.15-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /app

COPY docker/configs/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
