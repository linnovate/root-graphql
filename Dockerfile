FROM node:8

WORKDIR /app
COPY . /app
ENV PORT=3007
ENV ROOT_PORT=3100
#ENV ROOT_HOST=http://root-app
ENV ROOT_HOST=http://root.projects.linnovate.net
CMD [ "npm", "start" ]
EXPOSE 3007
