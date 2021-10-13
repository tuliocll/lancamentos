import prisma from "../../../../lib/prisma";

export default async function getOneService(id: number) {
  try {
    const people = await prisma.peoples.findUnique({
      where: {
        id,
      },
    });

    return people;
  } catch (err) {
    return false;
  }
}
