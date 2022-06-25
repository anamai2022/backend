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
-- Table structure for table `tbl_Logs`
--

DROP TABLE IF EXISTS `tbl_Logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_Logs` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_running` varchar(100) DEFAULT NULL,
  `f_year` int(11) DEFAULT '0',
  `f_login` int(11) DEFAULT NULL,
  `f_hospitalcode` int(11) DEFAULT NULL,
  `f_section` varchar(45) DEFAULT NULL,
  `f_question` int(11) DEFAULT '0',
  `f_question_group` varchar(45) DEFAULT '0',
  `f_sequence` int(11) DEFAULT '0',
  `f_applicationId` int(11) DEFAULT NULL,
  `f_companyId` int(11) DEFAULT NULL,
  `f_surveyId` int(11) NOT NULL,
  `f_questionnaireCode` int(11) DEFAULT NULL,
  PRIMARY KEY (`f_code`),
  KEY `f_questionnaireCode` (`f_questionnaireCode`),
  KEY `f_createBy` (`f_createBy`),
  CONSTRAINT `tbl_logs_ibfk_1` FOREIGN KEY (`f_questionnaireCode`) REFERENCES `tbl_questionnaire` (`f_code`),
  CONSTRAINT `tbl_logs_ibfk_2` FOREIGN KEY (`f_createBy`) REFERENCES `tbl_user` (`f_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_Logs`
--

LOCK TABLES `tbl_Logs` WRITE;
/*!40000 ALTER TABLE `tbl_Logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_Logs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-25 11:51:29
