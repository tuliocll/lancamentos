import prisma from "../../../../lib/prisma";

export default async function listAllService() {
  try {
    const allDebits = await prisma.debit.findMany();

    console.log(allDebits[0].agency, "saindo");

    return allDebits;
  } catch (err) {
    return false;
  }
}
