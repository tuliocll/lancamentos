import prisma from "../../../../lib/prisma";

export default async function listAllService(
  columns: string[],
  initialDate: string,
  finalDate: string,
  whereColumn: string
) {
  if (columns.length < 1) {
    return;
  }

  let select = {};

  columns.forEach((column) => Object.assign(select, { [column]: true }));

  try {
    const allDebits = await prisma.debit.findMany({
      select,
      where: {
        AND: [
          {
            [whereColumn]: {
              gte: new Date(initialDate),
            },
          },
          {
            [whereColumn]: {
              lte: new Date(finalDate),
            },
          },
        ],
      },
    });

    return allDebits;
  } catch (err) {
    console.log("erro", err);
    return false;
  }
}
