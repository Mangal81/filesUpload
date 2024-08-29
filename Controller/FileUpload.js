

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
