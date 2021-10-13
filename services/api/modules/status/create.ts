import prisma from "../../../../lib/prisma";

type StatusType = {
  id?: number;
  name: string;
};

export default async function createService({ name }: StatusType) {
  try {
    await prisma.status.create({
      data: {
        name,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
