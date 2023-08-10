//Creates a database:
CREATE DATABASE IF NOT EXISTS deepakdb;
USE deepakdb;

//Tables too store users information
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

//Tables too store login records
CREATE TABLE login_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Success', 'Failure') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
