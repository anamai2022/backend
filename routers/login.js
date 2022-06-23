const express = require("express");
const app = express();
const router = express.Router();

const authController = require('../controllers/authController');

router.get(
  "/",
  authController.getData,
  function (req, res) {}
);

router.get(
  "/:f_code",
  authController.searchById,
  function (req, res) {}
);

router.get(
    "/:f_name",
    authController.searchByName,
    function (req, res) {}
  );

router.post(
  "/loginCode/:f_login",
  authController.loginCode,
  function (req, res) {}
);

router.post(
    "/login/:f_login",
    authController.login,
    function (req, res) {}
);

router.put(
  "/",
  authController.editData,
  function (req, res) {}
); //PUT - ใช้สำหรับ update ข้อมูลทั้งหมดทุก field ( อัพเดททั้ง doc หรือทั้ง record จากข้อมูลเก่าให้เป็นข้อมูลชุดที่ส่งมาอัพเดทแทน )

router.patch(
    "/",
    authController.updateData,
    function (req, res) {}
  ); //PATCH - ใช้สำหรับ update ข้อมูลเฉพาะ field ที่เราส่งไป ( ถ้า field ไหนเราไม่ได้ส่งไปให้ คือใช้ค่าเดิม )

router.delete(
  "/:f_code",
  authController.deleteData,
  function (req, res) {}
);

module.exports = router;