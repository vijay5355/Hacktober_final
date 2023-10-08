CREATE DATABASE login_system;
USE login_system;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
INSERT INTO users (username, password, email) VALUES
('user1', 'hashed_password_1', 'user1@example.com'),
('user2', 'hashed_password_2', 'user2@example.com');
SELECT * FROM users WHERE username = 'user1' AND password = 'hashed_password_input';
