-- AlterTable
ALTER TABLE `article` ADD COLUMN `backupId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_backupId_fkey` FOREIGN KEY (`backupId`) REFERENCES `article`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
