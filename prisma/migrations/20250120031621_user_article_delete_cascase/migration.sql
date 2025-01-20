-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_authorId_fkey`;

-- DropIndex
DROP INDEX `article_authorId_fkey` ON `article`;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
