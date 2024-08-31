const mongoose = require("mongoose");
const transporter = require("../Config/mailConfig");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

const files = mongoose.Schema({
	name:{
		type:String,
		required:true,
		trim:true,
	},
	email:{
		type:String,
		required:true,
		trim:true,
	},
	tag:{
		type:String,
		required:true,
		trim:true,
	},
	url:{
		type:String,
		required:true,
		trim:true,
	}
})

files.post("save", async function (doc){
	try {

		// console.log(doc);

		//task 1 = send mail according to image and video (attach video or img tag in html according to file(img or video))

		const result = await transporter.sendMail({
			from:"Cloudinary file upload",
			to:doc.email,
			subject:"File",
			html:`<h2>Hey.. ${doc.name} File Uploaded successfully</h2> <a href = "${doc.url}">View here</a> </br> </br>
			 <img src="${doc.url}" alt="uploaded image" width="600" height="400"> 
			`
		});

		// console.log(result);
		console.log("Mail sent");
	} 
	catch (error) {
		console.log(error);
	}
})

module.exports = mongoose.model("Files", files);
