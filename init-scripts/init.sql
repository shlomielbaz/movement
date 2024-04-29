CREATE DATABASE IF NOT EXISTS movement_db;

UPDATE mysql.user SET authentication_string=PASSWORD("ROOT#@DB!123") WHERE USER="root";

UPDATE mysql.user SET plugin="mysql_native_password";


USE movement_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(70) NOT NULL,
    last_name VARCHAR(70) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL
);


INSERT INTO movement_db.users
    (first_name, last_name, email, password, avatar)
VALUES
    ('Shlomi', 'elbaz', 'shlomi.elbaz@outlook.com', PASSWORD("Antonio1!", ''));
