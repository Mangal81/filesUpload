const express = require("express");
const router = express.Router();

const {localFileUpload, imageFileUpload, videoFileUpload} = require("../Controller/FileUpload");

router.post('/localFileUpload', localFileUpload);
router.post('/imageFileUpload', imageFileUpload);
router.post('/videoFileUpload', videoFileUpload);


module.exports = router;