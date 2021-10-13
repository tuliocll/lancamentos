import prisma from "../../../../lib/prisma";

type OperationType = {
  id?: number;
  name: string;
};

export default async function createService({ name }: OperationType) {
  try {
    await prisma.operations.create({
      data: {
        name,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
