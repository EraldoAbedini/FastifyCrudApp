FROM node:18.3.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 


COPY . .

EXPOSE 8080


CMD ["node", "src/server.js"]