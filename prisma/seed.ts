import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.upsert({
    create: {
      title: "This Is Post 1",
      content: "This is post 1, lets try to get this post up and running",
    },
    where: { id: 1 },
    update: {},
  });

  console.log({ post });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
