const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require('../middleware/authenticateJWT')
// const authenticateJWT = (req, res, next) => {
// 	const authHeader = req.headers.authorization;
    
// 	if (authHeader) {
// 	    const token = authHeader.split(' ')[1];
    
// 	    jwt.verify(token, process.env.secret, (err, user) => {
// 		if (err) {
// 		    return res.sendStatus(403);
// 		}
    
// 		req.user = user;
// 		next();
// 	    });
// 	} else {
// 	    res.sendStatus(401);
// 	}
//     };
const profileController = require('../controllers/profileController');

router.get("/:f_code",authenticateJWT,profileController.getProfile);
router.get("/",authenticateJWT,profileController.getAllData);
router.post("/",authenticateJWT,profileController.getSaveProfile);
router.patch("/:f_code",authenticateJWT,profileController.getUpdateData);
router.put("/:f_code",authenticateJWT,profileController.getUpdateAll);

module.exports = router;