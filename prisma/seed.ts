import prisma from "../lib/prisma";

const main = async () => {
  await prisma.services.createMany({
    data: [
      { name: "01-AQUISIÇÃO DE INSUMOS" },
      { name: "02-COMBUSTÍVEL" },
      { name: "03-DESPESAS COM EQUIPAMENTOS" },
      { name: "04-DESPESAS COM CONTEIRO/ESCRITÓRO" },
      { name: "05-ESTACIONAMENTO/PEDÁGIO" },
      { name: "06-ALIMENTAÇÃO/OBRA" },
      { name: "07-HONORÁRIO/PESSOAL" },
      { name: "08-IMPOSTOS/TAXAS/GARANTIAS" },
      { name: "09-VIAGEM/HOSPEDAGEM" },
    ],
  });

  await prisma.operations.createMany({
    data: [
      { name: "Recibo" },
      { name: "Boleto" },
      { name: "NF" },
      { name: "TED" },
      { name: "DOC" },
      { name: "PIX" },
    ],
  });

  await prisma.status.createMany({
    data: [
      {
        name: "No prazo",
      },
      {
        name: "Atrasado",
      },
      {
        name: "Pago",
      },
    ],
  });

  await prisma.peoples.createMany({
    data: [
      {
        name: "Beto",
      },
      {
        name: "Danillo",
      },
      {
        name: "Silvestre",
      },
    ],
  });
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
