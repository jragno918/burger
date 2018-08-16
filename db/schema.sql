-- Drops the database burger_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the burger_db database --
CREATE DATABASE burgers_db;
-- Tells the app to use the database burger_db --
USE burgers_db;

-- Creates a table called burgers --
CREATE TABLE burgers
(
  id int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
