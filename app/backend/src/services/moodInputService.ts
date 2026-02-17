import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface MoodInputCreate {
  userId: string;
  moodText?: string;
  moodVoicePath?: string;
}

export async function createMoodInput(data: MoodInputCreate) {
  return prisma.moodInput.create({ data });
}
