/*
  Warnings:

  - You are about to drop the column `id_provider` on the `Products` table. All the data in the column will be lost.
  - Added the required column `idProvider` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Products` DROP FOREIGN KEY `products_FK`;

-- AlterTable
ALTER TABLE `Products` DROP COLUMN `id_provider`,
    ADD COLUMN `idProvider` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `products_FK` ON `Products`(`idProvider`);

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `products_FK` FOREIGN KEY (`idProvider`) REFERENCES `Providers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
