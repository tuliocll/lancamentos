import prisma from "../../../../lib/prisma";

type ServicesType = {
  id?: number;
  name: string;
};

export default async function createService({ name }: ServicesType) {
  try {
    await prisma.services.create({
      data: {
        name,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
