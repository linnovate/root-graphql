FROM node:8

WORKDIR /app
COPY . /app
ENV PORT=1111
ENV ROOT_PORT=3002
ENV ROOT_HOST=http://localhost
CMD [ "npm", "start" ]
EXPOSE 1111


