const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const router = require('./routes');
const db = require('./config/db');

// TODO: HTTP Logger
app.use(morgan('combined'));

// TODO: Template Engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// TODO: Link Static file
app.use(express.static(path.join(__dirname, 'public')));

// TODO: route init
router.route(app);

// TODO: Connect to mongoDB
db.connect();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
