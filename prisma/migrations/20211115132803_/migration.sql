/*
  Warnings:

  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `private` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "private" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "activated" SET DEFAULT true;
