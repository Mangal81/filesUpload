const mongoose = require("mongoose");

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

module.exports = mongoose.model("Files", files);
