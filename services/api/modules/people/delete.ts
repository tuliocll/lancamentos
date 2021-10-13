import prisma from "../../../../lib/prisma";

export default async function deleteService(id: number) {
  try {
    await prisma.peoples.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
