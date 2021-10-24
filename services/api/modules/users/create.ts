import prisma from "../../../../lib/prisma";

type UserType = typeof prisma.user;

export default async function createService(user: UserType) {
  try {
    await prisma.user.create({
      data: user,
    });

    return true;
  } catch (err) {
    return false;
  }
}
