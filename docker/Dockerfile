FROM node:18.13-alpine

WORKDIR /usr/src/app

RUN mkdir -p /var/log && \
    chmod 0775 /var/log

RUN rm -rf /var/www/dump

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

ENV PORT 3002

CMD [ "npm", "run", "start" ]
