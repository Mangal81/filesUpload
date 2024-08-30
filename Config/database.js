
const mongoose = require("mongoose");
require('dotenv').config();

exports.connect = async () => {
	try {
		mongoose.connect(process.env.DB_URL)
		.then(() => {
			console.log("Database connection working");
		})
		.catch((err) => {
			console.log(err);
		});
	} 
	catch (error) {
		console.log(error);
	}
}















