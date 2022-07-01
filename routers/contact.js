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
router.patch("/:f_code",contactController.getUpdateData,authenticateJWT); //PATCH - ใช้สำหรับ update ข้อมูลเฉพาะ field ที่เราส่งไป ( ถ้า field ไหนเราไม่ได้ส่งไปให้ คือใช้ค่าเดิม )
router.put("/:f_code",contactController.getUpdateAll,authenticateJWT); //PUT - ใช้สำหรับ update ข้อมูลทั้งหมดทุก field ( อัพเดททั้ง doc หรือทั้ง record จากข้อมูลเก่าให้เป็นข้อมูลชุดที่ส่งมาอัพเดทแทน )
module.exports = router;