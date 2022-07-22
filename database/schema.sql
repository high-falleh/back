DROP DATABASE IF EXISTS highFalleh;

CREATE DATABASE highFalleh;

USE highFalleh;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `userId` INTEGER NOT NULL AUTO_INCREMENT,
  `userFullName` VARCHAR(255) NULL DEFAULT NULL,
  `userEmail` VARCHAR(255) NULL DEFAULT NULL,
  `userPassword` VARCHAR(255) NULL DEFAULT NULL,
  `userPhone` VARCHAR(255) NULL DEFAULT NULL,
  `userPicture` VARCHAR(255) NULL DEFAULT NULL,
  `userDateOfBirth` DATE NULL DEFAULT NULL,
  `cityId` INTEGER NULL DEFAULT NULL,
  `countryId` INTEGER NULL DEFAULT NULL,
  `userAdress` VARCHAR(255) NULL DEFAULT NULL,
  `isActif` INTEGER NULL DEFAULT 1,
  `createDate` DATETIME NULL DEFAULT NULL,
  `verifiedEmail` INTEGER NULL DEFAULT 0,
  PRIMARY KEY (`userId`)
);

-- ---
-- Table 'Cyties'
-- 
-- ---

DROP TABLE IF EXISTS `Cyties`;
		
CREATE TABLE `Cyties` (
  `cityId` INTEGER NOT NULL AUTO_INCREMENT,
  `cityName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`cityId`)
);

-- ---
-- Table 'Countries'
-- 
-- ---

DROP TABLE IF EXISTS `Countries`;
		
CREATE TABLE `Countries` (
  `countryId` INTEGER NOT NULL AUTO_INCREMENT,
  `countryName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`countryId`)
);

-- ---
-- Table 'Products'
-- 
-- ---

DROP TABLE IF EXISTS `Products`;
		
CREATE TABLE `Products` (
  `productId` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NOT NULL,
  `productTypeId` INTEGER NULL DEFAULT NULL,
  `animalWeight` INTEGER NULL DEFAULT NULL,
  `animalSellingPrice` INTEGER NULL DEFAULT NULL,
  `animalBuyingPrice` INTEGER NULL DEFAULT NULL,
  `animalDateOfBirth` DATE NULL DEFAULT NULL,
  `plantUnitPrice` INTEGER NULL DEFAULT NULL,
  `plantStock` INTEGER NULL DEFAULT NULL, 
  `productPicture` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`productId`, `userId`)
);

-- ---
-- Table 'Employees'
-- 
-- ---

DROP TABLE IF EXISTS `Employees`;
		
CREATE TABLE `Employees` (
  `employeeId` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NULL DEFAULT NULL,
  `fullNameEmployee` VARCHAR(255) NULL DEFAULT NULL,
  `employeeTel` INTEGER NULL DEFAULT NULL,
  `employeePicture` VARCHAR(255) NULL DEFAULT NULL,
  `employeeSalary` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`employeeId`, `userId`)
);

-- ---
-- Table 'Clients'
-- 
-- ---

DROP TABLE IF EXISTS `Clients`;
		
CREATE TABLE `Clients` (
  `clientId` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
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
  `providerId` INTEGER NOT NULL,
  `userId` INTEGER NOT NULL,
  `fullName` VARCHAR(255) NULL DEFAULT NULL,
  `telNumber` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`providerId`, `userId`)
);

-- ---
-- Table 'ProductCategories'
-- 
-- ---

DROP TABLE IF EXISTS `ProductCategories`;
		
CREATE TABLE `ProductCategories` (
  `productCategoryId` INTEGER NOT NULL AUTO_INCREMENT,
  `productCategoryLabel` VARCHAR(255) NULL DEFAULT NULL,
  `productCategoryPicture` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`productCategoryId`)
);

-- ---
-- Table 'ProductTypes'
-- 
-- ---

DROP TABLE IF EXISTS `ProductTypes`;
		
CREATE TABLE `ProductTypes` (
  `productTypeId` INTEGER NOT NULL AUTO_INCREMENT,
  `productTypeLabel` VARCHAR(255) NULL DEFAULT NULL,
  `productTypePicture` VARCHAR(255) NULL DEFAULT NULL,
  `productCategoryId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`productTypeId`)
);

-- ---
-- Table 'HistorySelling'
-- 
-- ---

DROP TABLE IF EXISTS `HistorySelling`;
		
CREATE TABLE `HistorySelling` (
  `historySellingId` INTEGER NOT NULL AUTO_INCREMENT,
  `historySellingAmount` INTEGER NULL DEFAULT NULL,
  `clientId` INTEGER NULL DEFAULT NULL,
  `transactionId` INTEGER NULL DEFAULT NULL,
  `productId` INTEGER NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `factureNum` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NOT NULL,
  PRIMARY KEY (`historySellingId`, `userId`)
);

-- ---
-- Table 'HistoryPaimentEmployee'
-- 
-- ---

DROP TABLE IF EXISTS `HistoryPaimentEmployee`;
		
CREATE TABLE `HistoryPaimentEmployee` (
  `historyId` INTEGER NOT NULL AUTO_INCREMENT,
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
  `userId` INTEGER NULL DEFAULT NULL,
  `transactionDate` DATE NULL DEFAULT NULL,
  `transactionTime` TIME NULL DEFAULT NULL,
  `transactionType` VARCHAR(255) NULL DEFAULT NULL,
  `transactionDescription` VARCHAR(255) NULL DEFAULT NULL,
  `transactionAmount` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`transactionId`, `userId`)
);

-- ---
-- Table 'HistoryBuying'
-- 
-- ---

DROP TABLE IF EXISTS `HistoryBuying`;
		
CREATE TABLE `HistoryBuying` (
  `historyBuyingId` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `historyBuyingAmount` INTEGER NULL DEFAULT NULL,
  `providerId` INTEGER NULL DEFAULT NULL,
  `userId` INTEGER NOT NULL,
  `transactionId` INTEGER NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `productId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`historyBuyingId`, `userId`)
);

-- ---
-- Table 'Facture'
-- 
-- ---

DROP TABLE IF EXISTS `Facture`;
		
CREATE TABLE `Facture` (
  `factureNum` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NOT NULL,
  `clientId` INTEGER NULL DEFAULT NULL,
  `date` INTEGER NULL DEFAULT NULL,
  `time` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`factureNum`, `userId`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Users` ADD FOREIGN KEY (cityId) REFERENCES `Cyties` (`cityId`);
ALTER TABLE `Users` ADD FOREIGN KEY (countryId) REFERENCES `Countries` (`countryId`);
ALTER TABLE `Products` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Products` ADD FOREIGN KEY (productTypeId) REFERENCES `ProductTypes` (`productTypeId`);

ALTER TABLE `Employees` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Clients` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Providers` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `ProductTypes` ADD FOREIGN KEY (productCategoryId) REFERENCES `ProductCategories` (`productCategoryId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (clientId) REFERENCES `Clients` (`clientId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (transactionId) REFERENCES `Transaction` (`transactionId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (productId) REFERENCES `Products` (`productId`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (factureNum) REFERENCES `Facture` (`factureNum`);
ALTER TABLE `HistorySelling` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `HistoryPaimentEmployee` ADD FOREIGN KEY (employeeId) REFERENCES `Employees` (`employeeId`);
ALTER TABLE `HistoryPaimentEmployee` ADD FOREIGN KEY (transactionId) REFERENCES `Transaction` (`transactionId`);
ALTER TABLE `Transaction` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (providerId) REFERENCES `Providers` (`providerId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (transactionId) REFERENCES `Transaction` (`transactionId`);
ALTER TABLE `HistoryBuying` ADD FOREIGN KEY (productId) REFERENCES `Products` (`productId`);
ALTER TABLE `Facture` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
ALTER TABLE `Facture` ADD FOREIGN KEY (clientId) REFERENCES `Clients` (`clientId`);

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
-- ALTER TABLE `ProductCategories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ProductTypes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HistorySelling` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HistoryPaimentEmployee` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Transaction` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HistoryBuying` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Facture` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`userId`,`userFullName`,`userEmail`,`userPassword`,`userPhone`,`userPicture`,`userDateOfBirth`,`cityId`,`countryId`,`userAdress`,`isActif`,`createDate`,`verifiedEmail`) VALUES
-- ('','','','','','','','','','','','','');
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
-- INSERT INTO `ProductCategories` (`productCategoryId`,`productCategoryLabel`,`productCategoryPicture`) VALUES
-- ('','','');
-- INSERT INTO `ProductTypes` (`productTypeId`,`productTypeLabel`,`productTypePicture`,`productCategoryId`) VALUES
-- ('','','','');
-- INSERT INTO `HistorySelling` (`historySellingId`,`historySellingAmount`,`clientId`,`transactionId`,`productId`,`date`,`quantity`,`factureNum`,`userId`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `HistoryPaimentEmployee` (`historyId`,`historyDate`,`amount`,`employeeId`,`transactionId`) VALUES
-- ('','','','','');
-- INSERT INTO `Transaction` (`transactionId`,`userId`,`transactionDate`,`transactionTime`,`transactionType`,`transactionDescription`,`transactionAmount`) VALUES
-- ('','','','','','','');
-- INSERT INTO `HistoryBuying` (`historyBuyingId`,`historyBuyingAmount`,`providerId`,`userId`,`transactionId`,`date`,`quantity`,`productId`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Facture` (`factureNum`,`userId`,`clientId`,`date`,`time`) VALUES
-- ('','','','','');