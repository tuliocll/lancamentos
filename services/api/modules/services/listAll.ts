import prisma from "../../../../lib/prisma";

export default async function listAllService() {
  try {
    const allServices = await prisma.services.findMany();

    return allServices;
  } catch (err) {
    return false;
  }
}
