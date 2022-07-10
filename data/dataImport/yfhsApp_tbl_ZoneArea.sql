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
-- Table structure for table `tbl_ZoneArea`
--

DROP TABLE IF EXISTS `tbl_ZoneArea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_ZoneArea` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_zoneAreaName` varchar(300) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ZoneArea`
--

LOCK TABLES `tbl_ZoneArea` WRITE;
/*!40000 ALTER TABLE `tbl_ZoneArea` DISABLE KEYS */;
INSERT INTO `tbl_ZoneArea` VALUES (1,'ศูนย์อนามัยที่ 1 เชียงใหม่','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(2,'ศูนย์อนามัยที่ 2 พิษณุโลก	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(3,'ศูนย์อนามัยที่ 3 นครสวรรค์	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(4,'ศูนย์อนามัยที่ 4 สระบุรี','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(5,'ศูนย์อนามัยที่ 5 ราชบุรี	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(6,'ศูนย์อนามัยที่ 6 ชลบุรี	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(7,'ศูนย์อนามัยที่ 7 ขอนแก่น	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(8,'ศูนย์อนามัยที่ 8 อุดรธานี	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(9,'ศูนย์อนามัยที่ 9 นครราชสีมา	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(10,'ศูนย์อนามัยที่ 10 อุบลราชธานี	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(11,'ศูนย์อนามัยที่ 11 นครศรีธรรมราช	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(12,'ศูนย์อนามัยที่ 12 ยะลา	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(13,'สำนักการแพทย์ กรุงเทพมหานคร(13)	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(14,'สำนักอนามัย กรุงเทพมหานคร(14)	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1),(15,'สถาบันสุขภาวะเขตเมือง	','2565-01-06 11:00:00',1,'2565-01-06 11:00:00',1,1);
/*!40000 ALTER TABLE `tbl_ZoneArea` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-08 14:24:50
