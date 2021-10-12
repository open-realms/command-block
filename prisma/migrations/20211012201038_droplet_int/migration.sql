/*
  Warnings:

  - The `dropletId` column on the `World` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "World" DROP COLUMN "dropletId",
ADD COLUMN     "dropletId" INTEGER;
