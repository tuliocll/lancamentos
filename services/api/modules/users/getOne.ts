import prisma from "../../../../lib/prisma";

export default async function getOneService(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (err) {
    return false;
  }
}
