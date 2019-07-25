from node:10

workdir /usr/app

copy package.json ./

run npm install

copy . ./src

expose 2000

cmd ["npm", "start"]