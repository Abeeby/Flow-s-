import { PrismaClient } from '@prisma/client';

// Avoid instantiating too many instances of Prisma in development
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma; 