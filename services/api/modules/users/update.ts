import prisma from "../../../../lib/prisma";

type UserType = typeof prisma.user;

export default async function updateService(id: number, data: UserType) {
  try {
    await prisma.user.update({
      data,
      where: {
        id,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
