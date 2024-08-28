
const mongoose = require("mongoose");
require('dotenv').config();

exports.connect = mongoose.connect(process.env.DB_URL)
.then(() => {
	console.log("Database connection working");
}).catch((err) => {
	console.log(err);
});














