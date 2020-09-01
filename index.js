const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs'
  }));

app.use(express.static('public'))

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index', data: data});
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
