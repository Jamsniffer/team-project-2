const path = require('path');
const express = require('express');
const dotenv = require ('dotenv');
const exphbs = require('express-handlebars');
const mysql = require ('mysql2');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')

const app = express();
const PORT = process.env.PORT || 3001;



const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set( 'view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});