const cloudinary = require("cloudinary").v2;
const fileModel = require("../Model/File");

// uploading file on local computer or server
exports.localFileUpload = async (request, response) => {
	try {
		const file = request.files.file;
		const path = __dirname +"/files/"+Date.now()+"_"+file.name;
		file.mv(path, (error)=>{
			console.log(error);
		});

		response.json({
			success:true,
			data:file,
			path:path,
			message:"file uploaded successfully"
		})
		console.log(path);

	} catch (error) {
		console.log(error);
	}
}

//upload on cloudinary

// file validation function 
function validateFileType(fileType, supportedType){
	return supportedType.includes(fileType);
}

//funtion to upload files on cloudinary
async function uploadToCloudinary(file, folder){

	const option = {
		folder
	}
	return await cloudinary.uploader.upload(file.tempFilePath, option);
} 

exports.imageFileUpload = async (request, response) => {
	try {
		const file = request.files.imageFile;
		const {name, email, tag} = request.body;
		//console.log("file : ",file);

		//validate file
		const supportedType = ["jpg", "jpeg", "png"];
		const fileType = file.name.split(".")[1];
		if(!validateFileType(fileType, supportedType)){
			return response.status(500).json({
				success:false,
				message:"File formate not supported"
			})
		}
		
		console.log("Please wait... ")
		// calling funtion to upload file on cloudinary
		const uploadResult = await uploadToCloudinary(file, "Files");
		if(!uploadResult){
			return response.status(500).json({
				success:false,
				message:"Unable to upload"
			})
		}

		const result = await fileModel.create({name, email, tag, url:uploadResult.secure_url});

		console.log(uploadResult);
		response.status(200).json({
			success:true,
			result:uploadResult,
			data:result,
			message:"File uploaded"
		})

	} 
	catch (error) {
		console.log(error);
	}
}