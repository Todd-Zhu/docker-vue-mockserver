FROM node

WORKDIR /usr/src/app

COPY package*.json ./
COPY app.js ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "node", "app.js" ]