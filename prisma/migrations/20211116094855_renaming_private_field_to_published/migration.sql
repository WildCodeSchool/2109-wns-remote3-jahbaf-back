/*
  Warnings:

  - You are about to drop the column `private` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "private",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
