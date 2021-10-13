import prisma from "../../../../lib/prisma";

export default async function updateService(id: number, data: any) {
  try {
    await prisma.services.update({
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
