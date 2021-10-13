import prisma from "../../../../lib/prisma";

export default async function listAllService() {
  try {
    const allPeoples = await prisma.peoples.findMany();

    return allPeoples;
  } catch (err) {
    return false;
  }
}
