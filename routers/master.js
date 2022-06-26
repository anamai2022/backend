const express = require("express");
const app = express();
const router = express.Router();

const masterController = require('../controllers/masterController');

router.get("/score",masterController.getScore);
router.get("/year",masterController.getYear);
router.get("/",masterController.getAllData);
router.get("/zonearea",masterController.getZoneArea);

// router.patch("/:f_code",masterController.getUpdateData); //PATCH - ใช้สำหรับ update ข้อมูลเฉพาะ field ที่เราส่งไป ( ถ้า field ไหนเราไม่ได้ส่งไปให้ คือใช้ค่าเดิม )
// router.put("/:f_code",masterController.getUpdateAll); //PUT - ใช้สำหรับ update ข้อมูลทั้งหมดทุก field ( อัพเดททั้ง doc หรือทั้ง record จากข้อมูลเก่าให้เป็นข้อมูลชุดที่ส่งมาอัพเดทแทน )
module.exports = router;