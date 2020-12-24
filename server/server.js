const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env'});

const routes = require('./routes/routes')

const app = express();

app.use('/api/v1/routes', routes)

app.get('/',(req,res) => res.sendStatus('Hello'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
