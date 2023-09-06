-- recippedia.`user` definition

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password_hash` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- recippedia.recipe definition

CREATE TABLE `recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` text,
  `ingredients` text,
  `instructions` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- C:\Users\Aldi Andalan\AppData\Roaming\DBeaverData\workspace6\General\Scripts
--Script-prod-w11
-- please excute it one by one not all scripts (execute create first and then insert for each table, do not execute all scripts for all tables, for instance execute create user table first then insert into user table then execute create recipe table and so on)
