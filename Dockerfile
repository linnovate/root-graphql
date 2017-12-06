FROM node:8

WORKDIR /app

COPY . /app

CMD [ "npm", "start" ]

EXPOSE 1111


