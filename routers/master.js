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

const masterController = require('../controllers/masterController');

router.get("/score",authenticateJWT,masterController.getScore);
router.get("/organization",authenticateJWT,masterController.getOrganization);
router.get("/position",authenticateJWT,masterController.getPosition);
router.get("/institution",authenticateJWT,masterController.getInstitution);
router.get("/year",authenticateJWT,masterController.getYear);
router.get("/",authenticateJWT,masterController.getAllData);
router.get("/zonearea",authenticateJWT,masterController.getZoneArea);
router.get("/appovelevel",authenticateJWT,masterController.getAllLevel);
module.exports = router;