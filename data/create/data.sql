-- yfhsApp.tbl_Answer definition

CREATE TABLE `tbl_Answer` (
  `f_answerId` int(11) NOT NULL AUTO_INCREMENT,
  `f_answerName` varchar(250) NOT NULL,
  `f_answerCategoryId` int(11) NOT NULL,
  `f_answerTypeId` int(11) NOT NULL,
  `f_answerOptionId` int(11) NOT NULL,
  `f_description` varchar(8000) DEFAULT NULL,
  `f_applicationId` int(11) NOT NULL,
  `f_companyId` int(11) NOT NULL,
  `f_seq` int(11) NOT NULL,
  `f_skipAnswer` varchar(150) DEFAULT NULL,
  `f_attachmentId` varchar(50) DEFAULT NULL,
  `f_attribute` json DEFAULT NULL,
  `f_IsActive` tinyint(1) NOT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_answerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_answerscore definition

CREATE TABLE `tbl_answerscore` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_section` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_docrunning` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_userCode` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_zone` int(11) DEFAULT NULL,
  `f_province` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_hospitalLevel` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_hospitalCode` int(11) DEFAULT NULL,
  `f_positionCode` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_createdate` datetime DEFAULT NULL,
  `f_year` int(11) DEFAULT '0',
  `f_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '-',
  `f_codetitle` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_score` double DEFAULT '0',
  `f_question_group` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_question` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_sequence` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_status` int(11) DEFAULT '0',
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


-- yfhsApp.tbl_App_menu definition

CREATE TABLE `tbl_App_menu` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_tilie` varchar(255) DEFAULT NULL,
  `f_detail` varchar(255) DEFAULT NULL,
  `f_img` varchar(255) DEFAULT NULL,
  `f_url` varchar(255) DEFAULT NULL,
  `f_topmenu` int(11) DEFAULT '0',
  `f_show` int(11) DEFAULT '0',
  `f_banner` int(11) DEFAULT '0',
  `f_adminmenu` int(11) DEFAULT '0',
  `f_adminGroupMenu` varchar(50) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Application definition

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


-- yfhsApp.tbl_attachmentFile definition

CREATE TABLE `tbl_attachmentFile` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_docrunning` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_userCode` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_zone` int(11) DEFAULT NULL,
  `f_province` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_filedocument` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_image` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_filetype` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_hospitalLevel` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_hospitalCode` int(11) DEFAULT NULL,
  `f_positionCode` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_section` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '-',
  `f_status` int(11) DEFAULT '0',
  `f_address_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_additional_message` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `f_createdate` datetime DEFAULT NULL,
  `f_filesize` int(11) DEFAULT '0',
  `f_year` int(11) DEFAULT '0',
  `f_type` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT 'system',
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


-- yfhsApp.tbl_Company definition

CREATE TABLE `tbl_Company` (
  `f_companyId` int(11) NOT NULL AUTO_INCREMENT,
  `f_company` varchar(100) DEFAULT 'company',
  `f_companyCode` varchar(200) DEFAULT '9999',
  `f_province` varchar(150) DEFAULT NULL,
  `f_provinceSub` varchar(45) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_companyId`)
) ENGINE=InnoDB AUTO_INCREMENT=1091 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Contact definition

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_FlowAnswer definition

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


-- yfhsApp.tbl_formExtra definition

CREATE TABLE `tbl_formExtra` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_fromType` varchar(50) DEFAULT NULL,
  `f_codeQuestion` int(11) DEFAULT NULL,
  `f_title` varchar(255) DEFAULT NULL,
  `f_detail` varchar(45) DEFAULT NULL,
  `f_request` tinyint(4) DEFAULT NULL,
  `f_description` varchar(280) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` varchar(150) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` varchar(150) DEFAULT NULL,
  `f_status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Hospital definition

CREATE TABLE `tbl_Hospital` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_hospitalcode` int(11) DEFAULT NULL,
  `f_login` varchar(25) DEFAULT NULL,
  `f_hospitalname` varchar(300) NOT NULL,
  `f_address` varchar(300) DEFAULT NULL,
  `f_subdistrict` varchar(300) DEFAULT NULL,
  `f_district` varchar(300) DEFAULT NULL,
  `f_province` varchar(300) DEFAULT NULL,
  `f_zipcode` int(11) DEFAULT NULL,
  `f_latitude` double DEFAULT NULL,
  `f_longitude` double DEFAULT NULL,
  `f_ipaddress` varchar(45) DEFAULT NULL,
  `f_zoneArea` int(11) DEFAULT NULL,
  `f_bed` int(11) DEFAULT NULL,
  `f_telphone` int(11) DEFAULT NULL,
  `f_fax` int(11) DEFAULT NULL,
  `f_type_hospital` int(11) DEFAULT NULL,
  `f_remark` varchar(3000) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` varchar(100) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` varchar(100) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1070 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Loginyfhs definition

CREATE TABLE `tbl_Loginyfhs` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_zone` int(11) DEFAULT '0',
  `f_province` varchar(100) DEFAULT '0',
  `f_positionCode` varchar(100) DEFAULT '200',
  `f_hospitalCode` int(11) DEFAULT '0',
  `f_hospitalLevel` varchar(250) DEFAULT '-',
  `f_userCode` int(11) DEFAULT '0',
  `f_login` varchar(100) DEFAULT '200',
  `f_username` varchar(250) DEFAULT '-',
  `f_positionName` varchar(250) DEFAULT '-',
  `f_level` int(11) DEFAULT '0' COMMENT 'สอพ.',
  `f_level1` int(11) DEFAULT '0' COMMENT 'คกก.',
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Master definition

CREATE TABLE `tbl_Master` (
  `f_MasterId` int(11) NOT NULL AUTO_INCREMENT,
  `f_MasterName` varchar(300) NOT NULL,
  `f_MasterGroup` varchar(300) DEFAULT NULL,
  `f_SeqGroup` int(11) DEFAULT '0',
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_MasterId`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Profile definition

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Question definition

CREATE TABLE `tbl_Question` (
  `f_questionId` int(11) NOT NULL AUTO_INCREMENT,
  `f_questionName` varchar(250) NOT NULL,
  `f_questionTypeId` int(11) NOT NULL,
  `f_description` varchar(8000) DEFAULT NULL,
  `f_companyId` int(11) NOT NULL,
  `f_applicationId` int(11) NOT NULL,
  `f_seq` int(11) NOT NULL,
  `f_skipQuestions` varchar(150) DEFAULT NULL,
  `f_attachmentId` varchar(50) DEFAULT NULL,
  `f_attribute` json DEFAULT NULL,
  `f_isActive` tinyint(1) NOT NULL,
  `f_request` tinyint(1) NOT NULL,
  `f_inputBy` varchar(50) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_QuestionAnswer definition

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


-- yfhsApp.tbl_Questionnaire definition

CREATE TABLE `tbl_Questionnaire` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_section` varchar(45) DEFAULT NULL,
  `f_question` int(11) DEFAULT '0',
  `f_question_group` varchar(45) DEFAULT '0',
  `f_sequence` int(11) DEFAULT '0',
  `f_hadertitle` int(11) DEFAULT '0',
  `f_title` varchar(255) DEFAULT NULL,
  `f_detail` text,
  `f_request` int(11) DEFAULT '0',
  `f_description` varchar(280) DEFAULT '0',
  `f_questionWtMain` int(11) DEFAULT '0',
  `f_questionWtSub` float DEFAULT '0',
  `f_upload_file` varchar(200) DEFAULT '0',
  `f_upload_image` varchar(200) DEFAULT '0',
  `f_address_url` varchar(200) DEFAULT '0',
  `f_additional_message` varchar(255) DEFAULT '0',
  `f_form` varchar(150) DEFAULT '0',
  `f_fromextra` int(11) DEFAULT '0',
  `f_fromname` varchar(150) DEFAULT '-',
  `f_fromType` varchar(50) DEFAULT '0',
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Score definition

CREATE TABLE `tbl_Score` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_score` double DEFAULT '0',
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Survey definition

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


-- yfhsApp.tbl_Upload definition

CREATE TABLE `tbl_Upload` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_surveyId` int(11) DEFAULT NULL,
  `f_questionAnswerId` int(11) DEFAULT NULL,
  `f_docrunning` varchar(100) DEFAULT NULL,
  `f_userCode` varchar(45) DEFAULT NULL,
  `f_filedocument` varchar(250) DEFAULT NULL,
  `f_image` varchar(250) DEFAULT NULL,
  `f_filetype` varchar(250) DEFAULT NULL,
  `f_hospitalCode` int(11) DEFAULT NULL,
  `f_section` varchar(45) DEFAULT '-',
  `f_filesize` int(11) DEFAULT '0',
  `f_year` int(11) DEFAULT '0',
  `f_type` varchar(45) DEFAULT 'system',
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  `f_statusDoucument` int(11) DEFAULT '0',
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_User definition

CREATE TABLE `tbl_User` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_login` varchar(25) DEFAULT '-',
  `f_password` varchar(200) DEFAULT NULL,
  `f_usertype` int(11) DEFAULT '0',
  `f_remark` varchar(8000) DEFAULT NULL,
  `f_admintype` tinyint(1) NOT NULL,
  `f_contactId` int(11) DEFAULT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` varchar(100) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` varchar(100) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_UserQuestionAnswer definition

CREATE TABLE `tbl_UserQuestionAnswer` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_surveyId` int(11) NOT NULL,
  `f_year` int(11) DEFAULT '0',
  `f_questionId` int(11) NOT NULL,
  `f_questionSeq` int(11) NOT NULL,
  `f_answerId` int(11) NOT NULL,
  `f_answerSeq` int(11) NOT NULL,
  `f_answerFreeText` varchar(250) DEFAULT NULL,
  `f_answerAttachmentId` varchar(50) DEFAULT NULL,
  `f_objectId` int(11) NOT NULL,
  `f_referenceId` varchar(50) NOT NULL,
  `f_userObjectId` int(11) NOT NULL,
  `f_userId` varchar(50) NOT NULL,
  `f_IsActive` tinyint(1) NOT NULL,
  `f_scoreCode` int(11) NOT NULL,
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_Year definition

CREATE TABLE `tbl_Year` (
  `f_code` int(11) NOT NULL AUTO_INCREMENT,
  `f_detail` int(11) DEFAULT '2021',
  `f_createDate` datetime DEFAULT NULL,
  `f_createBy` int(11) DEFAULT NULL,
  `f_updateDate` datetime DEFAULT NULL,
  `f_updateBy` int(11) DEFAULT NULL,
  `f_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`f_code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- yfhsApp.tbl_ZoneArea definition

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


-- yfhsApp.tbl_Logs definition

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

-- yfhsApp.tv_grouphospital source

CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `tv_grouphospital` AS
select
    `tbl_hospital`.`f_code` AS `f_code`,
    `tbl_user`.`f_login` AS `f_login`,
    `tbl_hospital`.`f_hospitalcode` AS `f_hospitalcode`,
    `tbl_hospital`.`f_hospitalname` AS `f_hospitalname`,
    `tbl_hospital`.`f_province` AS `f_province`,
    `tbl_hospital`.`f_zoneArea` AS `f_zoneArea`,
    `tbl_zonearea`.`f_zoneAreaName` AS `f_zoneAreaName`,
    `tbl_hospital`.`f_type_hospital` AS `f_type_hospital`,
    `tbl_user`.`f_usertype` AS `f_usertype`,
    `tbl_hospital`.`f_status` AS `f_statusHospital`,
    `tbl_user`.`f_status` AS `f_statusUser`
from
    ((`tbl_hospital`
join `tbl_user` on
    ((`tbl_hospital`.`f_hospitalcode` = `tbl_user`.`f_contactId`)))
join `tbl_zonearea` on
    ((`tbl_hospital`.`f_zoneArea` = `tbl_zonearea`.`f_code`)))
order by
    `tbl_hospital`.`f_code`;

-- yfhsApp.tv_score source

CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `tv_score` AS
select
    `tbl_answerscore`.`f_code` AS `f_code`,
    `tbl_answerscore`.`f_codetitle` AS `f_codetitle`,
    `tbl_answerscore`.`f_docrunning` AS `f_docrunning`,
    `tbl_answerscore`.`f_section` AS `f_section`,
    `tbl_answerscore`.`f_question_group` AS `f_question_group`,
    `tbl_answerscore`.`f_hospitalCode` AS `f_hospitalCode`,
    `tbl_answerscore`.`f_year` AS `f_year`,
    `tbl_answerscore`.`f_score` AS `f_score`,
    `tbl_questionnaire`.`f_questionWtMain` AS `f_questionWtMain`,
    `tbl_questionnaire`.`f_questionWtSub` AS `f_questionWtSub`,
    `tbl_questionnaire`.`f_hadertitle` AS `f_hadertitle`,
    `tbl_answerscore`.`f_title` AS `f_title`,
    `tbl_questionnaire`.`f_upload_file` AS `f_upload_file`,
    `tbl_questionnaire`.`f_upload_image` AS `f_upload_image`,
    `tbl_questionnaire`.`f_address_url` AS `f_address_url`,
    `tbl_questionnaire`.`f_additional_message` AS `f_additional_message`,
    `tbl_questionnaire`.`f_form` AS `f_form`,
    `tbl_questionnaire`.`f_fromextra` AS `f_fromextra`,
    `tbl_questionnaire`.`f_fromname` AS `f_fromname`,
    `tbl_questionnaire`.`f_fromType` AS `f_fromType`,
    `tbl_answerscore`.`f_createdate` AS `f_createdate`,
    `tbl_answerscore`.`f_status` AS `f_status`
from
    (`tbl_answerscore`
join `tbl_questionnaire` on
    ((`tbl_answerscore`.`f_codetitle` = `tbl_questionnaire`.`f_code`)))
where
    `tbl_answerscore`.`f_createdate` in (
    select
        max(`tbl_answerscore`.`f_createdate`) AS `f_createdate`
    from
        `tbl_answerscore`
    group by
        `tbl_answerscore`.`f_codetitle`)
order by
    `tbl_questionnaire`.`f_code`,
    `tbl_answerscore`.`f_code`;    

-- yfhsApp.tv_Users source

CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `tv_users` AS
select
    `tc`.`f_contactId` AS `f_contactId`,
    `tc`.`f_firstName` AS `f_firstName`,
    `tc`.`f_lastName` AS `f_lastName`,
    `tc`.`f_email` AS `f_email`,
    `tu`.`f_login` AS `f_login`,
    `tu`.`f_password` AS `f_password`,
    `tu`.`f_admintype` AS `f_admintype`,
    `tu`.`f_usertype` AS `f_usertype`,
    `tu`.`f_status` AS `f_userStatus`,
    `tc`.`f_status` AS `f_contactStatus`
from
    (`tbl_contact` `tc`
join `tbl_user` `tu` on
    ((`tc`.`f_contactId` = `tu`.`f_contactId`)));    