const express = require("express");
const app = express();
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get("/:f_code",contactController.getProfile);
router.get("/name/:f_name",contactController.getProfileName);
router.get("/",contactController.getAllData);
router.patch("/:f_code",contactController.getUpdateData); //PATCH - ใช้สำหรับ update ข้อมูลเฉพาะ field ที่เราส่งไป ( ถ้า field ไหนเราไม่ได้ส่งไปให้ คือใช้ค่าเดิม )
router.put("/:f_code",contactController.getUpdateAll); //PUT - ใช้สำหรับ update ข้อมูลทั้งหมดทุก field ( อัพเดททั้ง doc หรือทั้ง record จากข้อมูลเก่าให้เป็นข้อมูลชุดที่ส่งมาอัพเดทแทน )
module.exports = router;