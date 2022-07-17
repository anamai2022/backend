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
-- Table structure for table `tbl_Survey`
--

DROP TABLE IF EXISTS `tbl_Survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_Survey` (
  `f_surveyId` int(11) NOT NULL AUTO_INCREMENT,
  `f_surveyName` varchar(250) NOT NULL,
  `f_description` varchar(8000) DEFAULT NULL,
  `f_surveyCategoryId` int(11) NOT NULL,
  `f_companyId` int(11) NOT NULL,
  `f_applicationId` int(11) NOT NULL,
  `f_remark` varchar(8000) DEFAULT NULL,
  `f_url` varchar(100) DEFAULT NULL,
  `f_startDate` timestamp(6) NOT NULL,
  `f_endDate` timestamp(6) NOT NULL,
  `f_isActive` tinyint(1) NOT NULL,
  `f_isPublish` tinyint(1) NOT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_surveyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_Survey`
--

LOCK TABLES `tbl_Survey` WRITE;
/*!40000 ALTER TABLE `tbl_Survey` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_Survey` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-25 11:51:28
