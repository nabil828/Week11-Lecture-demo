const express = require('express');
const app = express();
const cors = require('cors');
const pokemons = require('./data.json')

// console.log(pokemons);
app.use(cors());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



app.get('/pokemons', (req, res) => {
  res.json(pokemons.map(x => { return { "name": x.name.english, "id": x.id } }))
})


app.get('/pokemon', (req, res) => {
  console.log(req.query);
  res.json(
    pokemons
      .find((x) => x.id == req.query.pid)
  )
})


