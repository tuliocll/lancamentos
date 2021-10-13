import prisma from "../../../../lib/prisma";

export default async function getOneService(id: number) {
  try {
    const operation = await prisma.operations.findUnique({
      where: {
        id,
      },
    });

    return operation;
  } catch (err) {
    return false;
  }
}
