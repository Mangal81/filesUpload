const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
	host:process.env.MAIL_HOST,
	// port: 465,
	// secure: true,
	auth:{
		user:process.env.MAIL_USER,
		pass:process.env.MAIL_PASSWORD
	}
})

module.exports = transporter;