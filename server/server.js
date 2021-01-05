const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes/routes')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'});
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/routes', routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
