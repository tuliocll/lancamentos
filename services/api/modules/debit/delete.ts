import prisma from "../../../../lib/prisma";

export default async function deleteService(id: number) {
  try {
    await prisma.debit.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
