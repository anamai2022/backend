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
