DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;

USE burgersDB;

-- Created the table "burgers"
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(60) NOT NULL,
  devoured BOOLEAN default 1,
  createdAt TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);



