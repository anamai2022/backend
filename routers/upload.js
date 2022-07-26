var express = require("express");
var router = express.Router();
var app = express();
const multer = require("multer");
const maxSize = 100000000;
const path = require('path');
global.__basedir = __dirname;
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require("../middleware/authenticateJWT");
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
router.post("/save", authenticateJWT,uploadControllers.getUploadSaveController);
router.get('/:f_code',authenticateJWT,uploadControllers.getImageController);
router.get('/show/:f_docrunning/:f_hospitalCode/:f_year/:f_code',authenticateJWT,uploadControllers.getDataImgAndFileController);
router.get('/showtrash/:f_docrunning/:f_hospitalCode/:f_year/:f_code',authenticateJWT,uploadControllers.getDataImgAndFileTrashController);

module.exports = router;