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
-- Table structure for table `tbl_QuestionAnswer`
--

DROP TABLE IF EXISTS `tbl_QuestionAnswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_QuestionAnswer` (
  `f_questionAnswerId` int(11) NOT NULL AUTO_INCREMENT,
  `f_year` int(11) DEFAULT '0',
  `f_surveyId` int(11) NOT NULL,
  `f_questionSeq` int(11) NOT NULL,
  `f_questionId` int(11) NOT NULL,
  `f_answerSeq` int(11) NOT NULL,
  `f_answerId` int(11) NOT NULL,
  `f_request` int(11) DEFAULT '0',
  `f_qr_code` int(11) DEFAULT NULL,
  `f_attribute` json DEFAULT NULL,
  `f_isActive` tinyint(1) NOT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_questionAnswerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_QuestionAnswer`
--

LOCK TABLES `tbl_QuestionAnswer` WRITE;
/*!40000 ALTER TABLE `tbl_QuestionAnswer` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_QuestionAnswer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-25 11:51:26
