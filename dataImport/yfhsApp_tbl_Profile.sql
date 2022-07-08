-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: yfhsApp
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_Profile`
--

DROP TABLE IF EXISTS `tbl_Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_Profile` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_hospitalcode` int(11) DEFAULT NULL,
  `f_vision` varchar(300) DEFAULT NULL,
  `f_mistion` varchar(1000) DEFAULT NULL,
  `f_policy` varchar(1000) DEFAULT NULL,
  `f_gotoKnow` varchar(1000) DEFAULT NULL,
  `f_facebook` varchar(200) DEFAULT NULL,
  `f_twitter` varchar(200) DEFAULT NULL,
  `f_line` varchar(200) DEFAULT NULL,
  `f_director` varchar(100) DEFAULT NULL,
  `f_physician` varchar(100) DEFAULT NULL,
  `f_responsiblePerson` varchar(100) DEFAULT NULL,
  `f_remark` varchar(1000) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` varchar(100) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` varchar(100) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_Profile`
--

LOCK TABLES `tbl_Profile` WRITE;
/*!40000 ALTER TABLE `tbl_Profile` DISABLE KEYS */;
INSERT INTO `tbl_Profile` VALUES (1,1457,'บริการสุขภาพด้านอนามัยเจริญพันธุ์สำหรับวัยรุ่น ด้วยความเป็นมิตรและมีมาตรฐาน','บริการสุขภาพและอนามัยเจริญพันธุ์สำหรับวัยรุ่นที่มีคุณภาพมาตรฐานและการมีส่วนร่วมของเยาวชนและเครือข่ายในการวางแผนการดำเนินการบริการสุขภาพอนามัยเจริญพันธุ์สำหรับวัยรุ่นอย่างยั่งยืน','การให้บริการสุขภาพอนามัยเจริญพันธุ์สำหรับวัยรุ่นทั้งเชิงรับและเชิงรุก\n•	สนับสนุนการเผยแพร่ข้อมูล การเรียนรู้เรื่องเพศศึกษา อนามัยเจริญพันธุ์ สุขภาพทางเพศครอบคลุม ส่งเสริมสุขภาพ การป้องกันภาวะเสี่ยงจากโรคติดต่อทางเพศสัมพันธ์และทักษะชีวิตอย่างรอบด้าน\n•	จัดบริการ ปรึกษา ให้ความรู้เพื่อหาทางเลือกที่เหมาะสมก่อนการตัดสินใจยุติการตั้งครรภ์ เพื่อป้องกันปัญหาจากการตั้งครรภ์ไม่พร้อม\n•	ประสานบริการร่วมกับภาคีเครือข่ายอย่างต่อเนื่องและยั่งยืน\n','1. บุคลากรผู้ให้บริการมีความรู้แนวทางในการดำเนินงานบริการที่เป็นมิตรสำหรับวัยรุ่นและเยาวชน\n2. เพื่อพัฒนาและสนับสนุนบริการที่เป็นมิตรกับวัยรุ่นและเยาวชนให้ได้มาตรฐาน\n3. เพื่อจัดตั้งคลินิกบริการที่เป็นมิตรกับวัยรุ่นและเยาวชนในโรงพยาบาลวังชิ้น\n4. เพื่อสร้างเครือข่ายเยาวชนในสถานศึกษาและในชุมชนในการมีส่วนร่วมและวางแผนดำเนินงาน\nช่วยเหลือวัยรุ่น\n5. เพื่อให้วัยรุ่นได้รับบริการสุขภาพทั้งด้านส่งเสริม / ป้องกัน / การให้คำปรึกษา และการ\nช่วยเหลือที่มีคุณภาพตามมาตรฐานและให้การช่วยเหลือตามความต้องการ\n6. ให้บริการที่เป็นมิตรสำหรับวัยรุ่นและเยาวชนแบบ One Stop Service\n7. สนับสนุนวัสดุ/เวชภัณฑ์แก่กลุ่มวัยรุ่นที่มีต้องการความช่วยเหลือ\n8. เพื่อพัฒนาศักยภาพความรู้ให้แก่ แกนนำ นักเรียน ในสถานศึกษา',NULL,NULL,NULL,'1','2','1',NULL,'2022-07-04 20:43:14','admin','2022-07-04 20:43:14','admin',1),(6,11189,'วิสัยทัศน์aa','พันธกิจbb','นโยบายcc','เป้าประสงค์sss',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-07-04 20:43:14','thoenghos01','2022-07-04 21:10:30','thoenghos01',1),(7,41797,'ทัศน์','พันธ','นโยบาย','เป้าประสงค์',NULL,NULL,NULL,'SaveContact','ชื่อผู้อำนวยการ','ชื่อแพทย์ผู้รับผิดชอบ',NULL,'2022-07-05 10:48:25','BTC069YFHS','2022-07-05 15:58:00','BTC069YFHS',1),(8,11194,'วิสัย','วิสัย','นโยบาย','วิสัย',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-07-08 08:49:25','maesaihos01',NULL,NULL,1);
/*!40000 ALTER TABLE `tbl_Profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-08 14:24:51
