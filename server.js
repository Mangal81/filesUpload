const express = require("express");
const fileUpload = require('express-fileupload');
const router = require('./Routes/fileUpload');
// const cloudinaryConnect = ;

require("dotenv").config();
require("./Config/database").connect;
require('./Config/cloudinary').cloudinaryConnect();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use("/api/v1", router); 

//starting app 
app.listen(PORT, ()=>{
	console.log(`App is running on port ${PORT}`);
})

// default routes
app.get("/",(request, response)=>{
	response.json({
		success:true,
		message:"This is default route"
	})
})

