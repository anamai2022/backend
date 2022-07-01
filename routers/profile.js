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
const profileController = require('../controllers/profileController');

router.get("/:f_code",profileController.getProfile);
router.get("/",profileController.getAllData);
router.post("/",profileController.getSaveProfile);
router.patch("/:f_code",profileController.getUpdateData);
router.put("/:f_code",profileController.getUpdateAll);

module.exports = router;