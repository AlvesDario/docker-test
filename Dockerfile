from node:11

workdir /usr/src

copy package.json ./

run npm install

copy . .

cmd ["npm", "start"]