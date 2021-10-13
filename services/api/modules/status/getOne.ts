import prisma from "../../../../lib/prisma";

export default async function getOneService(id: number) {
  try {
    const service = await prisma.services.findUnique({
      where: {
        id,
      },
    });

    return service;
  } catch (err) {
    return false;
  }
}
