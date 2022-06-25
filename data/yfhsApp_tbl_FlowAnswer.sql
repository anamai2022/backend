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
-- Table structure for table `tbl_FlowAnswer`
--

DROP TABLE IF EXISTS `tbl_FlowAnswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_FlowAnswer` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_running` varchar(100) DEFAULT '-',
  `f_g1` int(11) DEFAULT '0',
  `f_g2` int(11) DEFAULT '0',
  `f_g3` int(11) DEFAULT '0',
  `f_g4` int(11) DEFAULT '0',
  `f_g5` int(11) DEFAULT '0',
  `f_Total` int(11) DEFAULT '0',
  `f_levelOne` int(11) DEFAULT '0',
  `f_levelOneName` varchar(150) DEFAULT '-',
  `f_levelTwo` int(11) DEFAULT '0',
  `f_levelTwoName` varchar(150) DEFAULT '-',
  `f_levelThree` int(11) DEFAULT '0',
  `f_levelThreeName` varchar(150) DEFAULT '-',
  `f_levelFour` int(11) DEFAULT '0',
  `f_levelFourName` varchar(150) DEFAULT '-',
  `f_levelFive` int(11) DEFAULT '0',
  `f_levelFiveName` varchar(150) DEFAULT '-',
  `f_appove` varchar(150) DEFAULT '-',
  `f_statusAppove` int(11) DEFAULT '0',
  `f_year` int(11) DEFAULT '0',
  `f_levelOnetoday` datetime DEFAULT NULL,
  `f_levelTwotoday` datetime DEFAULT NULL,
  `f_levelThreetoday` datetime DEFAULT NULL,
  `f_levelFourtoday` datetime DEFAULT NULL,
  `f_levelFivetoday` datetime DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_FlowAnswer`
--

LOCK TABLES `tbl_FlowAnswer` WRITE;
/*!40000 ALTER TABLE `tbl_FlowAnswer` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_FlowAnswer` ENABLE KEYS */;
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