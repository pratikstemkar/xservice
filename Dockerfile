FROM node:18-alpine
WORKDIR /src
COPY . .
RUN npm install express
EXPOSE 4000
CMD node server.js
