
create schema if not exists myapp default CHARSET=utf8;

use myapp;

CREATE TABLE `posts` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `content` varchar(180) DEFAULT NULL,
  `created_at` datetime DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8


-- Select user from mysql.user;

-- CREATE USER 'yolanda'@'localhost' IDENTIFIED BY 'mamita';

-- GRANT ALL PRIVILEGES ON myapp TO 'yolanda'@'localhost';

-- FLUSH PRIVILEGES;

-- SHOW GRANTS FOR 'yolanda'@'localhost';

-- REVOKE ALL PRIVILEGES ON * . * FROM 'yolanda'@'localhost';