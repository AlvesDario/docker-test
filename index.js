const express = require('express');
const app = express();

const server = require('http').Server(app);
app.use(express.json());

// app.use(require('./rotas'));
const Item = [];

app.get('/', (req, res) => {
  try{
    // console.log(req);
    Item.push(req.query.name);
    console.log("added");
    res.send(Item);
  }catch(error){ error => console.log(error)};
  // console.log(Item);
});

server.listen(2000, () => {
    console.log('iniciado');
});