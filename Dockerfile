FROM node:18.13.0-slim

WORKDIR /usr/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g @angular/cli@16.2.0
RUN npm install

COPY ./angular.json ./
COPY ./tsconfig.json ./
COPY ./tsconfig.app.json ./
COPY ./tailwind.config.js ./

ENTRYPOINT ["ng", "serve", "--poll=2000", "--host=ui"]
