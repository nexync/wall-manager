const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/routes')

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}, (err) => {
	if (err) throw err;
	console.log(`MongoDB Connected`);
});

const app = express();
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname,'/client/public/index.html'));
	});
}

app.use('/api', routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
