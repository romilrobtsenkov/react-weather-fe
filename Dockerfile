FROM node:8

RUN mkdir -p /var/www/react-weather-fe

WORKDIR /var/www/react-weather-fe

COPY package.json /var/www/react-weather-fe/package.json
COPY package-lock.json /var/www/react-weather-fe/package-lock.json
COPY webpack.config.js /var/www/react-weather-fe/webpack.config.js

RUN npm install

VOLUME /var/www/react-weather-fe
