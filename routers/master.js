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

const masterController = require('../controllers/masterController');

router.get("/score",masterController.getScore);
router.get("/year",masterController.getYear);
router.get("/",masterController.getAllData);
router.get("/zonearea",masterController.getZoneArea);
router.get("/appovelevel",masterController.getAllLevel);
module.exports = router;