import prisma from "../../../../lib/prisma";

type ListAllType = {
  page: number;
  size: number;
  orderBy: string;
  order: "asc" | "desc";
  search: string;
  initialDate: string;
  finalDate: string;
  filterFields: string[] | undefined;
  filterValues: string[] | undefined;
};

export default async function listAllService({
  finalDate,
  initialDate,
  order,
  orderBy,
  page,
  search,
  size,
  filterFields,
  filterValues,
}: ListAllType) {
  try {
    const fixPage = page > 0 ? page - 1 : 0;

    let filters: {
      [key: string]: {
        [key: string]: string | number;
      };
    } = {};

    if (
      filterFields &&
      filterValues &&
      filterValues.length > 0 &&
      filterFields.length > 0
    ) {
      filterFields.forEach((field, index) => {
        const value = filterValues[index];

        const formatValue = isNaN(Number(value)) ? value : Number(value);
        // Se for uma string, uso o comparador "contains", se não uso o "equals"
        const typeFilter = isNaN(Number(value)) ? "contains" : "equals";

        filters[field] = {
          [typeFilter]: formatValue,
        };
      });
    }

    const allDebits = await prisma.debit.findMany({
      take: size,
      skip: fixPage * size,
      where: {
        service: {
          contains: search,
        },
        ...filters,
      },
      orderBy: {
        [orderBy]: order,
      },
    });

    const totalElements = await prisma.debit.count({
      orderBy: {
        [orderBy]: order,
      },
    });

    return {
      totalElements,
      totalPages: Math.ceil(totalElements / size),
      content: allDebits,
    };
  } catch (err) {
    console.log(err);
    return false;
  }
}
