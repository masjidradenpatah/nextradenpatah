/*
  Warnings:

  - Added the required column `content` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `ProgramExecution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_backupId_fkey`;

-- DropForeignKey
ALTER TABLE `programexecution` DROP FOREIGN KEY `programExecution_programId_fkey`;

-- AlterTable
ALTER TABLE `program` ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `customeUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `programexecution` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ProgramExecution` ADD CONSTRAINT `ProgramExecution_programId_fkey` FOREIGN KEY (`programId`) REFERENCES `Program`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_backupId_fkey` FOREIGN KEY (`backupId`) REFERENCES `Article`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RedefineIndex
-- CREATE UNIQUE INDEX `Article_slug_key` ON `Article`(`slug`);
-- DROP INDEX `article_slug_key` ON `article`;
