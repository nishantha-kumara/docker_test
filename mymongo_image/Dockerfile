# OS Level - install os
FROM alpine

# SOFTWARE Level - install software
RUN apk add binutils
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0

# CONFIGURATION Level - software configuration

VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

# DEFAULT Commands and settings

CMD [ "mongod" ]