var express = require("express");
var router = express.Router();
var app = express();
const multer = require("multer");
const maxSize = 100000000;
const path = require('path');
global.__basedir = __dirname;
const upLoadfile = require('path').resolve('./public/uploads/')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, upLoadfile)
    },
    filename: (req, file, cb) => {
        let fileName = 'file-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length-1];
        cb(null,  fileName)}
})


const upload = multer({ storage: storage })

const uploadControllers = require('../controllers/uploadControllers');

router.post("/", upload.single('file'), uploadControllers.getUploadController);
router.post("/save", uploadControllers.getUploadSaveController);
router.get('/:f_code',uploadControllers.getImageController);

module.exports = router;