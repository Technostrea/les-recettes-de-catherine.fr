# ETAPE 1: Construire l'application
FROM node:20-alpine AS node-builder

ARG APP_NAME=les-recette-de-catherine
ARG ENVIRONMENT=production
ARG NG_VERSION=18
ARG BASE_REF=""

ENV APP_NAME=$APP_NAME
ENV ENVIRONMENT=$ENVIRONMENT
ENV NG_VERSION=$NG_VERSION
ENV BASE_REF=$BASE_REF

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install -g @angular/cli@$NG_VERSION

COPY . .

RUN npm install --legacy-peer-deps
RUN ng build --configuration=$ENVIRONMENT --output-path=dist/ --base-href /$BASE_REF


# ETAPE 2: Héberger l'application sur un serveur web nginx
FROM nginx:1.26.0-alpine as server
EXPOSE 80

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*
COPY --from=node-builder /app/dist/browser /usr/share/nginx/html
COPY --from=node-builder /app/nginx.conf /etc/nginx/conf.d/default.conf
