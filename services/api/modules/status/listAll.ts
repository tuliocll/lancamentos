import prisma from "../../../../lib/prisma";

export default async function listAllService() {
  try {
    const allStatus = await prisma.status.findMany();

    return allStatus;
  } catch (err) {
    return false;
  }
}
