import prisma from "../../../../lib/prisma";

import { User } from ".prisma/client";

export default async function updateService(id: number, data: Partial<User>) {
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
