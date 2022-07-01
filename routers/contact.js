const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization;
    
	if (authHeader) {
	    const token = authHeader.split(' ')[1];
    
	    jwt.verify(token, process.env.secret, (err, user) => {
		if (err) {
		    return res.sendStatus(403);
		}
    
		req.user = user;
		next();
	    });
	} else {
	    res.sendStatus(401);
	}
    };
const contactController = require('../controllers/contactController');

router.get("/:f_code",authenticateJWT,contactController.getProfile);
router.get("/name/:f_name",authenticateJWT, contactController.getProfileName);
router.get("/",authenticateJWT, contactController.getAllData);
router.post("/",authenticateJWT,contactController.getSaveData);
router.patch("/:f_code",authenticateJWT,contactController.getUpdateData); 
router.put("/:f_code",authenticateJWT,contactController.getUpdateAll); 
router.delete("/:f_code",authenticateJWT,contactController.getDeleteData)
module.exports = router;