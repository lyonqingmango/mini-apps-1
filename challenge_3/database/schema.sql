Drop Database if Exists checkout;
CREATE DATABASE checkout;
use checkout

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE form (
  id INT NOT NULL AUTO_INCREMENT,
  name CHAR(50),
  email Char(50),
  password Char(50),
  address CHAR(30),
  city Char(50),
  state Char(50) ,
  zipcode char(50),
  phonenumber char(50),
  credit CHAR(30),
  expire Char(50),
  cvv Char(50),
  billing char(50),
  userID INT,
  FOREIGN KEY (userID) REFERENCES user(id),
  PRIMARY Key(id)
)
