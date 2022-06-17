Drop Database if Exists checkout;
CREATE DATABASE checkout;
use checkout

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE form1(
  id INT NOT NULL AUTO_INCREMENT,
  name CHAR(30) not null,
  email Char(50) not null,
  password Char(50) not null,
  userID INT,
  FOREIGN KEY (userID) REFERENCES user(id),
  PRIMARY Key(id)
)
