import prisma from "../../../../lib/prisma";

export default async function listAllService() {
  try {
    const allOperations = await prisma.operations.findMany();

    return allOperations;
  } catch (err) {
    return false;
  }
}
