CREATE TABLE User(
	userId VARCHAR(60),
	username VARCHAR(20),
  	profileImg VARCHAR(200),
	created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  	updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
	primary key(userId)
);

-- ----------

INSERT INTO User(userId, username, profileImg)
VALUES ("one", "SeungEun", "ImageOne");

INSERT INTO User(userId, username, profileImg)
VALUES ("two", "TaewooKo", "ImageTwo");

INSERT INTO User(userId, username, profileImg)
VALUES ("three", "KiJae", "ImageThree");

INSERT INTO User(userId, username, profileImg)
VALUES ("four", "RootPark", "ImageFour");

INSERT INTO User(userId, username, profileImg)
VALUES ("asd", "KeyWoong", "ImageFive");

-- ----------

SELECT * FROM User;

SELECT userId, userName FROM User
WHERE created=(SELECT MIN(created) FROM User);

SELECT userName FROM User
WHERE userId='asd';

DELETE FROM User
WHERE userName="RootPark";

UPDATE User
SET userId='dsa'
WHERE userName="KiJae";
