import prisma from "../../../../lib/prisma";

type DebitType = {
  id?: number;
  service: string;
  account: string;
  bank: string;
  description: string;
  document: string;
  expiry: string;
  operation: string;
  paymentBy: string;
  paymentDate: string;
  pix: string;
  provider: string;
  requestedBy: string;
  status: string;
  value: string;
  agency: string;
};

export default async function createService({
  service,
  account,
  bank,
  description,
  document,
  expiry,
  operation,
  paymentBy,
  paymentDate,
  pix,
  provider,
  requestedBy,
  status,
  value,
  agency,
}: DebitType) {
  try {
    await prisma.debit.create({
      data: {
        service,
        account,
        bank,
        description,
        document,
        expiry,
        operation,
        paymentBy,
        paymentDate,
        pix,
        provider,
        requestedBy,
        status,
        value,
        agency,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
