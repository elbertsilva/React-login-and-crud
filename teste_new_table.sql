DROP TABLE IF EXISTS `new_table`;
CREATE TABLE `new_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) DEFAULT NULL,
  `cidade` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `new_table` WRITE;
INSERT INTO `new_table` VALUES (1,'aaa','aaa'),(2,NULL,'bbbbb'),(3,NULL,'ccccc'),(4,NULL,'ccccc'),(5,'dddd','eeeeeee'),(9,'ffff','fffff'),(10,'hhhhhhhhhh','jjjjjjjjjjj');
UNLOCK TABLES;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
