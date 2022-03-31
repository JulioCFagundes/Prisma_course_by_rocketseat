/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_teacher]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_teacher` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courses` ADD COLUMN `fk_id_teacher` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `teachers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `teachers_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `courses_fk_id_teacher_key` ON `courses`(`fk_id_teacher`);

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_fk_id_teacher_fkey` FOREIGN KEY (`fk_id_teacher`) REFERENCES `teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
