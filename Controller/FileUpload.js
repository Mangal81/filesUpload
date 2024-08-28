

// uploading file on local computer or server
exports.localFileUpload = async (req, res) => {
	try {
		const file = req.files;

		console.log(file);
	} catch (error) {
		console.log(error);
	}
}
