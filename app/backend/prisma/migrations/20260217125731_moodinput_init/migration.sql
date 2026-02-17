/*
  Warnings:

  - You are about to drop the `Mood` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Mood";

-- CreateTable
CREATE TABLE "MoodInput" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moodText" TEXT,
    "moodVoicePath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MoodInput_pkey" PRIMARY KEY ("id")
);
