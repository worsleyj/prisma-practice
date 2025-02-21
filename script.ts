import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //write queries here
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
