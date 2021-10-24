import prisma from "../../../../lib/prisma";
import { User } from ".prisma/client";

export default async function createService(user: Partial<User>) {
  try {
    await prisma.user.create({
      data: user,
    });

    return true;
  } catch (err) {
    return false;
  }
}
