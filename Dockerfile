from node:10

workdir /usr/src

copy package.json ./

run npm install

copy . .

expose 2000

cmd ["npm", "start"]