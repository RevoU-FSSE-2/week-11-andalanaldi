
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password_hash` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT x.* FROM recippedia.`user` x
LIMIT 0, 200

INSERT INTO recippedia.`user` (user_id,username,password_hash,`role`)
	VALUES (4,'granews@gmail.com','granews645','publisher')
INSERT INTO recippedia.`user` (user_id,username,password_hash,`role`)
	VALUES (3,'greathill@gmail.com','greathillsale711','publisher')
INSERT INTO recippedia.`user` (user_id,username,password_hash,`role`)
	VALUES (2,'souma.shougek@gmail.com','shougekinosouma134','user')
INSERT INTO recippedia.`user` (user_id,username,password_hash,`role`)
	VALUES (1,'sanji.strawhat@gmail.com','sanjilovenamiswan123','user')
-- please excute it one by one not all scripts
CREATE TABLE `recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` text,
  `ingredients` text,
  `instructions` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT x.* FROM recippedia.recipe x
LIMIT 0, 200

INSERT INTO recippedia.recipe (id,user_id,name,ingredients,instructions,created_at,updated_at)
	VALUES (3,2,'Indonesian Fried Banana','Ingredients, 8 ripe saba bananas (or 4 ripe plantains, cut each plantain into 2 to get 8 pieces total), oil for deep frying, Pisang goreng batter, 100 gram rice flour, 1 1/2 teaspoon baking powder, 1/2 teaspoon baking soda, 2 teaspoon sugar, 1/2 teaspoon salt, 1/8 teaspoon turmeric powder (optional), 1/2 cup water','Instructions, Heat enough oil in a pot for deep frying, make sure there are at least 2 inches of oil, preferably 3 inches., Meanwhile, peel all the bananas. Optionally, make three slits along its length, but keep the bottom 1 inch intact, so the bananas can be opened up like a fan., Whisk together all pisang goreng batter in a mixing bowl., Once the oil is hot, scoop 1 tablespoon of hot oil and add to the batter, whisk again. (*), Coat the bananas with batter and deep-fry until golden brown and crispy, about 3-4 minutes. At around 2 minutes into frying, drop batter in drips into the hot oil to make plenty of batter droplets, then quickly coat the bananas with the resulting crispy bits. This creates an additional layer to ensure your resulting pisang goreng stays crispy for longer., Remove bananas and drain on a wire rack to remove excess oil. Pisang goreng is best when served immediately.','2024-02-29 09:59:59','1000-01-01 01:01:01')
INSERT INTO recippedia.recipe (id,user_id,name,ingredients,instructions,created_at,updated_at)
	VALUES (2,1,'Fried Tapioca Flour aka Cireng','Main ingredients, 240 g Tapioca starch, 300 ml Water, 1/4 cup Green onion chopped, 3 tsp Salt, 6 cloves Garlic, 2 tsp Chicken seasoning, Cooking oil for frying, Rujak sauce, 140 g Palm sugar, 26 g Tamarin paste, 18 pieces Cayenne pepper optional, Add extra if you like it extra spicy, Salt, 60 ml Water','Instructions, Grind garlic, salt and chicken seasoning until smooth and evenly mix., Mix well garlic paste into water then add about 4 tbsp tapioca starch., Turn on the stove over medium heat then stir it until thickened., Add green onion and stir until well blended., Put the thickening seasoning into the remaining tapioca starch on the large bowl then mix, leave a little tapioca starch so when you forming it won’t stick., Make cireng/fried tapioca flour in a round shape about 18-20 pieces., In a pan fry, heat the cooking oil over medium heat., Fry cireng until nice and golden., After cireng is cooked, rest it on a cooling rack to remove excess oil., While the cireng is resting, make a rujak sauce., Grind cayenne pepper, tamarind paste, palm sugar, and a little salt with pestle and mortar until evenly mix then add about 60 ml water. Your sauce is ready., Enjoy!','2028-02-29 19:19:19','1000-01-01 01:01:01')
INSERT INTO recippedia.recipe (id,user_id,name,ingredients,instructions,created_at,updated_at)
	VALUES (1,1,'Marinated zebra beef sirloin','- 1 sirloin steak per person - Salt and pepper - 4 tomatoes, peeled and seeded - 1 tbsp. red wine - Sour cream (optional) - 3 tbsp. fresh marjoram - 3 tbsp. fresh thyme - 1/4 tbsp. cracked black pepper - 60 ml (1/4 cup) corn oil','Chop the herbs; combine all the marinade ingredients in a bowl; place the steaks side by side in a large dish; coat with the marinade; marinate for 6 hours or more in the refrigerator, turning occasionally; before cooking, remove the steaks from the refrigerator and season with salt and pepper; in a very hot non-stick pan, sear the steaks and grill them for a few minutes on each side to the desired degree of doneness; transfer to a warm serving platter or plates; add the tomatoes to the same pan and cook for 5 minutes in the meat juices; transfer to the serving platter or plates; deglaze the pan with the red wine, pour over the tomatoes; serve as described above.','2032-02-29 09:09:09','1000-01-01 01:01:01')

ALTER TABLE recippedia.recipe DROP COLUMN created_at ;
ALTER TABLE recippedia.recipe DROP COLUMN updated_at ;

