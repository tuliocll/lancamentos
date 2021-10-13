import prisma from "../../../../lib/prisma";

type PeopleType = {
  id?: number;
  name: string;
};

export default async function createService({ name }: PeopleType) {
  try {
    await prisma.peoples.create({
      data: {
        name,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
