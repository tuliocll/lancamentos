import prisma from "../../../../lib/prisma";

export default async function getOneService({
  id,
  email,
}: {
  id?: number;
  email?: string;
}) {
  try {
    if (email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      return user;
    } else {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      return user;
    }
  } catch (err) {
    return undefined;
  }
}
