/*
  Warnings:

  - You are about to alter the column `category` on the `article` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `article` MODIFY `category` ENUM('PENDIDIKAN', 'AKIDAH', 'FIQIH') NOT NULL;
