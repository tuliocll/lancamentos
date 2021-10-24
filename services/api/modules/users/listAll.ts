import prisma from "../../../../lib/prisma";

export default async function listAllService({
  page,
  size,
}: {
  page: number;
  size: number;
}) {
  try {
    const fixPage = page > 0 ? page - 1 : 0;

    const allUsers = await prisma.user.findMany({
      take: size,
      skip: fixPage * size,
    });

    const totalElements = await prisma.user.count();

    return {
      totalElements,
      totalPages: Math.ceil(totalElements / size),
      content: allUsers,
    };
  } catch (err) {
    return false;
  }
}
