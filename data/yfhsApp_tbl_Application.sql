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
-- Table structure for table `tbl_Application`
--

DROP TABLE IF EXISTS `tbl_Application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_Application` (
  `f_applicationId` int(11) NOT NULL AUTO_INCREMENT,
  `f_applicationName` varchar(250) NOT NULL,
  `f_applicationShortName` varchar(250) DEFAULT NULL,
  `f_applicationUrl` varchar(250) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` varchar(100) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` varchar(100) DEFAULT NULL,
  `f_status` int(11) DEFAULT '0',
  PRIMARY KEY (`f_applicationId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_Application`
--

LOCK TABLES `tbl_Application` WRITE;
/*!40000 ALTER TABLE `tbl_Application` DISABLE KEYS */;
INSERT INTO `tbl_Application` VALUES (1,'การประเมินตนเองมาตราฐานบริการสุขภาพที่เป็นมิตรสำหรับวัยรุ่น','YFHS','https://yfhs.anamai.moph.go.th',NULL,'1',NULL,'1',1),(2,'ระบบฐานข้อมูลเฝ้าระวังการตั้งครรภ์ในวัยรุ่น','Teenmom','https://teenmom.anamai.moph.go.th',NULL,'1',NULL,'1',1),(3,'ระบบฐานข้อมูลอนามัยการเจริญพันธุ์ประเทศไทย','Rhdata','https://rhdata.anamai.moph.go.th',NULL,'1',NULL,'1',1),(4,'Amphoeonline','Amphoeonline','https://amphoeonline.anamai.moph.go.th',NULL,'1',NULL,'1',1),(5,'Teenactindicators','teenactindicators','https://teenactindicators.anamai.moph.go.th',NULL,'1',NULL,'1',1),(6,'Survey','Surveyonline','https://survey.anamai.moph.go.th',NULL,'1',NULL,'1',1);
/*!40000 ALTER TABLE `tbl_Application` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-25 11:51:30
