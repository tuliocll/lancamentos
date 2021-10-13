import prisma from "../../../../lib/prisma";

export default async function getOneService(id: number) {
  try {
    const debit = await prisma.debit.findUnique({
      where: {
        id,
      },
    });

    return debit;
  } catch (err) {
    return false;
  }
}
