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
-- Table structure for table `tbl_Contact`
--

DROP TABLE IF EXISTS `tbl_Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_Contact` (
  `f_contactId` int(11) NOT NULL AUTO_INCREMENT,
  `f_firstName` varchar(250) DEFAULT NULL,
  `f_lastName` varchar(250) DEFAULT NULL,
  `f_nickname` varchar(250) DEFAULT NULL,
  `f_phone` varchar(250) DEFAULT NULL,
  `f_email` varchar(250) DEFAULT NULL,
  `f_line` varchar(250) DEFAULT NULL,
  `f_organization` varchar(100) DEFAULT NULL,
  `f_institution` varchar(100) DEFAULT NULL,
  `f_position` varchar(100) DEFAULT NULL,
  `f_remark` varchar(3000) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` varchar(100) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` varchar(100) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_contactId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_Contact`
--

LOCK TABLES `tbl_Contact` WRITE;
/*!40000 ALTER TABLE `tbl_Contact` DISABLE KEYS */;
INSERT INTO `tbl_Contact` VALUES (1,'Thanit','Netprokaew','Noom',NULL,'thanit@gmail.com',NULL,NULL,NULL,NULL,NULL,'2565-01-06 11:00:00',NULL,'2565-01-06 11:00:00',NULL,1),(2,'Ladawan','Netprokaew','Jik',NULL,'ladawan@gmail.com',NULL,NULL,NULL,NULL,NULL,'2565-01-06 11:00:00',NULL,'2565-01-06 11:00:00',NULL,1),(3,'SaveContact',NULL,NULL,'098111111','32234dsdfsg@ssdfsdf.fgfh',NULL,NULL,NULL,NULL,NULL,'2022-07-05 15:41:38','BTC069YFHS',NULL,NULL,1),(4,'saasdf',NULL,NULL,'098111111','32234dsdfsg@ssdfsdf.fgfh',NULL,NULL,NULL,NULL,NULL,'2022-07-05 15:41:38','BTC069YFHS',NULL,NULL,1),(5,'aaaaaa',NULL,NULL,'098111111','32234dsdfsg@ssdfsdf.fgfh',NULL,NULL,NULL,NULL,NULL,'2022-07-05 15:41:38','BTC069YFHS',NULL,NULL,1),(6,'asdfasf',NULL,NULL,'098111111','32234dsdfsg@ssdfsdf.fgfh',NULL,NULL,NULL,NULL,NULL,'2022-07-05 15:44:24','BTC069YFHS',NULL,NULL,1),(7,'f_director',NULL,NULL,'098120000','info@gmail.com',NULL,NULL,NULL,'นักจิตวิทยาปฏิบัติการ',NULL,'2022-07-05 15:51:59','BTC069YFHS',NULL,NULL,1),(8,'DAAAAA',NULL,NULL,'098120000','info@gmail.com',NULL,NULL,NULL,'นักจิตวิทยาปฏิบัติการ',NULL,'2022-07-05 15:51:59','BTC069YFHS',NULL,NULL,1),(9,'ชื่อผู้อำนวยการ',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-07-05 15:58:00','BTC069YFHS',NULL,NULL,1),(10,'ชื่อแพทย์ผู้รับผิดชอบ',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-07-05 15:58:00','BTC069YFHS',NULL,NULL,1);
/*!40000 ALTER TABLE `tbl_Contact` ENABLE KEYS */;
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
