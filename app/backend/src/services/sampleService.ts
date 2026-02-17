import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SampleService {
  static async saveSample(data: string) {
    return prisma.sample.create({
      data: { data, createdAt: new Date() },
    });
  }
}
