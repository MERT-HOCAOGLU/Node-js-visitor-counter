FROM node:alpine
WORKDIR /demo-app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node","server.js" ]
