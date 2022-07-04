const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require('../middleware/authenticateJWT')
// const authenticateJWT = (req, res, next) => {
// 		const authHeader = req.headers.authorization;
		
// 		if (authHeader) {
// 			const token = authHeader.split(' ')[1];
		
// 			jwt.verify(token, process.env.secret, (err, user) => {
// 			if (err) {
// 				return res.sendStatus(403);
// 			}
		
// 			req.user = user;
// 			next();
// 			});
// 		} else {
// 			res.sendStatus(401);
// 		}
//     };
const userController = require('../controllers/userController');

router.get("/:f_code",authenticateJWT,userController.getProfile);
router.get("/name/:f_name",authenticateJWT, userController.getProfileName);
router.get("/",authenticateJWT, userController.getAllData);
router.get("/forgotpassword/:f_code",userController.getSendProfile);
router.post("/register/",userController.getSaveData);
router.patch("/:f_code",authenticateJWT,userController.getUpdateData); 
router.put("/:f_code",authenticateJWT,userController.getUpdateAll); 
router.delete("/:f_code",authenticateJWT,userController.getDeleteData)
module.exports = router;