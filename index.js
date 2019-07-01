const express = require('express');
const app = express();

const server = require('http').Server(app);
app.use(express.json());

// app.use(require('./rotas'));
const Item = [];

app.get('/', (req, res) => {
  try{
    // console.log(req.query.name);
    Item.push(req.query)
    console.log("added");
  }catch(error){ error => console.log(error)};
  console.log(Item);
});

server.listen(2000, () => {
    console.log('iniciado');
});