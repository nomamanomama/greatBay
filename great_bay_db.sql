CREATE DATABASE IF NOT EXISTS great_bay_db;

USE great_bay_db;


CREATE table posts (
 id INTEGER(10) AUTO_INCREMENT,
 type VARCHAR(30) NOT NULL,
 name VARCHAR(30) NOT NULL,
 price INTEGER(30) NOT NULL,
 current_bid INTEGER(30),
 highest_bidder VARCHAR(30),
 PRIMARY KEY (id)
);



