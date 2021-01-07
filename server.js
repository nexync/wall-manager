const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/routes')

dotenv.config();

const connectDB = async () => {
	try {
		 const conn = await mongoose.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true
		 });
		 console.log('hi')

		 console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (err) {
		 console.log(`Error: ${err.message}`.red);
		 process.exit(1);
	}
}

connectDB();


const app = express();
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api', routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
