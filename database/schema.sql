DROP DATABASE IF EXISTS highFalleh;
CREATE DATABASE highFalleh ; 
USE highFalleh;




-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `userId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `fullName` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` INTEGER NULL DEFAULT NULL,
  `telNumber` VARCHAR(8) NULL DEFAULT NULL,
  `picture` VARCHAR(255) NULL DEFAULT NULL,
  `dateOfBirth` VARCHAR(10) NULL DEFAULT NULL,
  `cityId` INTEGER NULL DEFAULT NULL,
  `countryId` INTEGER NULL DEFAULT NULL,
  `adress` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`)
);

-- ---
-- Table 'Cyties'
-- 
-- ---

DROP TABLE IF EXISTS `Cyties`;
		
CREATE TABLE `Cyties` (
  `cityId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `cityName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`cityId`)
);

-- ---
-- Table 'Countries'
-- 
-- ---

DROP TABLE IF EXISTS `Countries`;
		
CREATE TABLE `Countries` (
  `countryId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `countryName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`countryId`)
);

-- ---
-- Table 'Products'
-- 
-- ---

DROP TABLE IF EXISTS `Products`;
		
CREATE TABLE `Products` (
  `productId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  `productTypeId` INTEGER NULL DEFAULT NULL,
  `animalWeight` INTEGER NULL DEFAULT NULL,
  `animalSellingPrice` INTEGER NULL DEFAULT NULL,
  `animalBuyingPrice` INTEGER NULL DEFAULT NULL,
  `animalDateOfBirth` INTEGER NULL DEFAULT NULL,
  `plantUnitPrice` INTEGER NULL DEFAULT NULL,
  `plantStock` INTEGER NULL DEFAULT NULL,
  `productCategoryId` INTEGER NULL DEFAULT NULL,
  `productPicture` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`productId`)
);

-- ---
-- Table 'Employees'
-- 
-- ---

DROP TABLE IF EXISTS `Employees`;
		
CREATE TABLE `Employees` (
  `employeeId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  `fullNameEmployee` VARCHAR(255) NULL DEFAULT NULL,
  `employeeTel` INTEGER NULL DEFAULT NULL,
  `employeePicture` INTEGER NULL DEFAULT NULL,
  `employeeSalary` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`employeeId`)
);

-- ---
-- Table 'Clients'
-- 
-- ---

DROP TABLE IF EXISTS `Clients`;
		
CREATE TABLE `Clients` (
  `clientId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  ` clientName` VARCHAR(255) NULL DEFAULT NULL,
  `clientTel` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`clientId`)
);

-- ---
-- Table 'Providers'
-- 
-- ---

DROP TABLE IF EXISTS `Providers`;
		
CREATE TABLE `Providers` (
  `providerId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  `fullName` VARCHAR NULL DEFAULT NULL,
  `telNumber` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`providerId`)
);

-- ---
-- Table 'ProductCategory'
-- 
-- ---

DROP TABLE IF EXISTS `ProductCategory`;
		
CREATE TABLE `ProductCategory` (
  `productCategoryId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `categoryLabel` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`productCategoryId`)
);

-- ---
-- Table 'ProductType'
-- 
-- ---

DROP TABLE IF EXISTS `ProductType`;
		
CREATE TABLE `ProductType` (
  `productTypeId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `productTypeLabel` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`productTypeId`)
);

-- ---
-- Table 'HistorySelling'
-- 
-- ---

DROP TABLE IF EXISTS `HistorySelling`;
		
CREATE TABLE `HistorySelling` (
  `historySellingId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `historySellingAmount` INTEGER NULL DEFAULT NULL,
  `clientId` INTEGER NULL DEFAULT NULL,
  ` transactionId` INTEGER NULL DEFAULT NULL,
  `productId` INTEGER NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `factureNum` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`historySellingId`)
);

-- ---
-- Table 'HistoryPaimentEmployee'
-- 
-- ---

DROP TABLE IF EXISTS `HistoryPaimentEmployee`;
		
CREATE TABLE `HistoryPaimentEmployee` (
  `historyId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `historyDate` INTEGER NULL DEFAULT NULL,
  `amount` INTEGER NULL DEFAULT NULL,
  `employeeId` INTEGER NULL DEFAULT NULL,
  `transactionId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`historyId`)
);

-- ---
-- Table 'Transaction'
-- 
-- ---

DROP TABLE IF EXISTS `Transaction`;
		
CREATE TABLE `Transaction` (
  `transactionId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `transactionDate` DATE NULL DEFAULT NULL,
  `transactionTime` TIME NULL DEFAULT NULL,
  `transactionType` INTEGER NULL DEFAULT NULL,
  `transactionDescription` INTEGER NULL DEFAULT NULL,
  `transactionAmount` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`transactionId`)
);

-- ---
-- Table 'HistoryBuying'
-- 
-- ---

DROP TABLE IF EXISTS `HistoryBuying`;
		
CREATE TABLE `HistoryBuying` (
  `historyBuyingId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `historyBuyingAmount` INTEGER NULL DEFAULT NULL,
  `providerId` INTEGER NULL DEFAULT NULL,
  `transactionId` INTEGER NULL DEFAULT NULL,
  `date` INTEGER NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  `productId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`historyBuyingId`)
);

-- ---
-- Table 'Facture'
-- 
-- ---

DROP TABLE IF EXISTS `Facture`;
		
CREATE TABLE `Facture` (
  `factureNum` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `clientId` INTEGER NULL DEFAULT NULL,
  `date` INTEGER NULL DEFAULT NULL,
  `time` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`factureNum`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Users` ADD FOREIGN KEY (cityId) REFERENCES `Cyties` (`cityId`);
ALTER TABLE `Users` ADD FOREIGN KEY (countryId) REFERENCES `Countries` (`countryId`);
ALTER TABLE `Products` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Products` ADD FOREIGN KEY (productTypeId) REFERENCES `ProductType` (`productTypeId`);
ALTER TABLE `Products` ADD FOREIGN KEY (productCategoryId) REFERENCES `ProductCategory` (`productCategoryId`);
ALTER TABLE `Employees` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Clients` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Providers` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (clientId) REFERENCES `Clients` (`clientId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY ( transactionId) REFERENCES `Transaction` (`transactionId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (productId) REFERENCES `Products` (`productId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (factureNum) REFERENCES `Facture` (`factureNum`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `HistoryPaimentEmployee` ADD FOREIGN KEY (employeeId) REFERENCES `Employees` (`employeeId`);
ALTER TABLE `HistoryPaimentEmployee` ADD FOREIGN KEY (transactionId) REFERENCES `Transaction` (`transactionId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (providerId) REFERENCES `Providers` (`providerId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (transactionId) REFERENCES `Transaction` (`transactionId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (productId) REFERENCES `Products` (`productId`);
ALTER TABLE `Facture` ADD FOREIGN KEY (clientId) REFERENCES `Clients` (`clientId`);
ALTER TABLE `Facture` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Cyties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Countries` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Employees` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Clients` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Providers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ProductCategory` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ProductType` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HistorySelling` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HistoryPaimentEmployee` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Transaction` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HistoryBuying` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Facture` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`userId`,`fullName`,`email`,`password`,`telNumber`,`picture`,`dateOfBirth`,`cityId`,`countryId`,`adress`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `Cyties` (`cityId`,`cityName`) VALUES
-- ('','');
-- INSERT INTO `Countries` (`countryId`,`countryName`) VALUES
-- ('','');
-- INSERT INTO `Products` (`productId`,`userId`,`productTypeId`,`animalWeight`,`animalSellingPrice`,`animalBuyingPrice`,`animalDateOfBirth`,`plantUnitPrice`,`plantStock`,`productCategoryId`,`productPicture`) VALUES
-- ('','','','','','','','','','','');
-- INSERT INTO `Employees` (`employeeId`,`userId`,`fullNameEmployee`,`employeeTel`,`employeePicture`,`employeeSalary`) VALUES
-- ('','','','','','');
-- INSERT INTO `Clients` (`clientId`,`userId`,` clientName`,`clientTel`) VALUES
-- ('','','','');
-- INSERT INTO `Providers` (`providerId`,`userId`,`fullName`,`telNumber`) VALUES
-- ('','','','');
-- INSERT INTO `ProductCategory` (`productCategoryId`,`categoryLabel`) VALUES
-- ('','');
-- INSERT INTO `ProductType` (`productTypeId`,`productTypeLabel`) VALUES
-- ('','');
-- INSERT INTO `HistorySelling` (`historySellingId`,`historySellingAmount`,`clientId`,` transactionId`,`productId`,`date`,`quantity`,`factureNum`,`userId`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `HistoryPaimentEmployee` (`historyId`,`historyDate`,`amount`,`employeeId`,`transactionId`) VALUES
-- ('','','','','');
-- INSERT INTO `Transaction` (`transactionId`,`transactionDate`,`transactionTime`,`transactionType`,`transactionDescription`,`transactionAmount`) VALUES
-- ('','','','','','');
-- INSERT INTO `HistoryBuying` (`historyBuyingId`,`historyBuyingAmount`,`providerId`,`transactionId`,`date`,`quantity`,`userId`,`productId`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Facture` (`factureNum`,`clientId`,`date`,`time`,`userId`) VALUES
-- ('','','','','');