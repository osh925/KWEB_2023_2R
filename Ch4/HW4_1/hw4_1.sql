CREATE TABLE `students` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `admission_year` INT NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `individual_number` INT NOT NULL,
    `phone_number` VARCHAR(11) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `total_credit` INT NOT NULL DEFAULT 0,
    `avg_credit` DOUBLE NOT NULL DEFAULT 0.0,
    `is_attending` TINYINT(1) NOT NULL DEFAULT 1,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;