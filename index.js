const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const Item = require('./models/item');

mongoose
  .connect(
    'mongodb://mongo:27017/docker-test',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  Item.find()
    .then(items => res.send({ items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.redirect('/'));
});

app.listen(2000, () => {
  console.log("working");
});