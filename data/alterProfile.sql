ALTER TABLE `yfhsApp`.`tbl_Profile` 
CHANGE COLUMN `f_createBy` `f_createBy` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `f_updateBy` `f_updateBy` VARCHAR(100) NULL DEFAULT NULL ;

ALTER TABLE `yfhsApp`.`tbl_User` 
CHANGE COLUMN `f_createBy` `f_createBy` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `f_updateBy` `f_updateBy` VARCHAR(100) NULL DEFAULT NULL ;

ALTER TABLE `yfhsApp`.`tbl_Hospital` 
CHANGE COLUMN `f_createBy` `f_createBy` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `f_updateBy` `f_updateBy` VARCHAR(100) NULL DEFAULT NULL ;


ALTER TABLE `yfhsApp`.`tbl_Contact` 
ADD COLUMN `f_organization` VARCHAR(100) NULL AFTER `f_line`,
ADD COLUMN `f_institution` VARCHAR(100) NULL AFTER `f_organization`,
ADD COLUMN `f_position` VARCHAR(100) NULL AFTER `f_institution`;

ALTER TABLE `yfhsApp`.`tbl_Contact` 
CHANGE COLUMN `f_createBy` `f_createBy` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `f_updateBy` `f_updateBy` VARCHAR(100) NULL DEFAULT NULL ;


ALTER TABLE `yfhsApp`.`tbl_Profile` 
CHANGE COLUMN `f_director` `f_director` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `f_physician` `f_physician` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `f_responsiblePerson` `f_responsiblePerson` VARCHAR(100) NULL DEFAULT NULL ;


ALTER TABLE `yfhsApp`.`tbl_Questionnaire` 
ADD COLUMN `f_questionWtMain` INT NULL DEFAULT 0 AFTER `f_description`,
ADD COLUMN `f_questionWtSub` INT NULL DEFAULT 0 AFTER `f_questionWtMain`;

ALTER TABLE `yfhsApp`.`tbl_Questionnaire` 
CHANGE COLUMN `f_questionWtSub` `f_questionWtSub` FLOAT NULL DEFAULT '0' ;

ALTER TABLE `yfhsApp`.`tbl_Upload` 
CHANGE COLUMN `f_surveyId` `f_docrunning` INT(11) NULL DEFAULT NULL ;


ALTER TABLE `yfhsApp`.`tbl_Questionnaire` 
DROP COLUMN `f_addyeartotal`,
DROP COLUMN `f_total`,
CHANGE COLUMN `f_yeartotal` `f_fromType` VARCHAR(150) NULL DEFAULT '0' ;

CREATE TABLE `yfhsApp`.`tbl_formExtra` (
  `f_code` INT NOT NULL AUTO_INCREMENT,
  `f_fromType` VARCHAR(150) NULL,
  `f_codeQuestion` INT NULL,
  `f_section` VARCHAR(45) NULL,
  `f_question` INT NULL,
  `f_questionWtMain` INT NULL,
  `f_questionWtSub` INT NULL,
  `f_question_group` VARCHAR(45) NULL,
  `f_sequence` INT NULL,
  `f_hadertitle` INT NULL,
  `f_title` VARCHAR(255) NULL,
  `f_detail` VARCHAR(45) NULL,
  `f_request` INT NULL,
  `f_description` VARCHAR(280) NULL,
  `f_createDate` DATETIME NULL,
  `f_createBy` VARCHAR(150) NULL,
  `f_updateDate` DATETIME NULL,
  `f_updateBy` VARCHAR(150) NULL,
  `f_status` TINYINT NULL,
  PRIMARY KEY (`f_code`));
