const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const mysql = require('mysql2');
const helpers = require('./utils/helpers');


const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server up and running'));
});