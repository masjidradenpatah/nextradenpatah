-- AlterTable
ALTER TABLE `article` MODIFY `content` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `program` MODIFY `description` MEDIUMTEXT NOT NULL,
    MODIFY `content` LONGTEXT NOT NULL;

-- RedefineIndex
-- CREATE UNIQUE INDEX `Article_slug_key` ON `Article`(`slug`);
-- DROP INDEX `article_slug_key` ON `article`;
