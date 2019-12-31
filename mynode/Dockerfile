FROM node:alpine

WORKDIR /usr/nodeapp

# first ./ is source dir of project secound ./ is working dir root eg: /usr/nodeapp
COPY ./ ./ 

RUN npm install

CMD [ "npm","start" ]

# docker run -it -p 8000:8000  987521bfcbb0
# above command -p mean port first 8000 is my local machine port and next 8000 is docker machine
# port. in the runtime docker machine port 8000 connect to the local machine port 8000 