/*
  Warnings:

  - The values [ANNUALLY] on the enum `program_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `program` MODIFY `type` ENUM('DAILY', 'ANNUALY') NOT NULL;
