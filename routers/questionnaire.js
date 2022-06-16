const express = require("express");
const app = express();
const router = express.Router();

const questionnaireControllers = require('../controllers/questionnaireController');

router.get(
  "/",
  questionnaireControllers.getData,
  function (req, res) {}
);

router.get(
  "/:f_code",
  questionnaireControllers.searchById,
  function (req, res) {}
);

router.get(
    "/:f_name",
    questionnaireControllers.searchByName,
    function (req, res) {}
  );

router.post(
  "/",
  questionnaireControllers.createData,
  function (req, res) {}
);
router.put(
  "/",
  questionnaireControllers.editData,
  function (req, res) {}
); //PUT - ใช้สำหรับ update ข้อมูลทั้งหมดทุก field ( อัพเดททั้ง doc หรือทั้ง record จากข้อมูลเก่าให้เป็นข้อมูลชุดที่ส่งมาอัพเดทแทน )

router.patch(
    "/",
    questionnaireControllers.updateData,
    function (req, res) {}
  ); //PATCH - ใช้สำหรับ update ข้อมูลเฉพาะ field ที่เราส่งไป ( ถ้า field ไหนเราไม่ได้ส่งไปให้ คือใช้ค่าเดิม )

router.delete(
  "/:f_code",
  questionnaireControllers.deleteData,
  function (req, res) {}
);

module.exports = router;