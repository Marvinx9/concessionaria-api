FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh /usr/app/

EXPOSE 3333

CMD ["./wait-for-it.sh", "database_concessionaria:5432", "--", "npm", "run", "dev"]
