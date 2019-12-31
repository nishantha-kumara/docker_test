FROM node:alpine

WORKDIR /var/app/node

COPY ./package.json ./

RUN npm install

COPY . .

CMD [ "npm","start" ]

