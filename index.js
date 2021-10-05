const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const upsquadRoute = require('./routes/upsquadRoute');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connection was sucessful'))
	.catch(err => {
		console.log(err);
	});

app.use(express.json());
app.use('/api/upsquad', upsquadRoute);

app.listen(6000, () => {
	console.log('server is running');
});