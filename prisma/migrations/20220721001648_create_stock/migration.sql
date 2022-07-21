-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_product` VARCHAR(255) NOT NULL,
    `amount` INTEGER NOT NULL,
    `id_provider` INTEGER NOT NULL,
    `category` VARCHAR(255) NOT NULL,

    INDEX `products_FK`(`id_provider`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_FK` FOREIGN KEY (`id_provider`) REFERENCES `provider`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
