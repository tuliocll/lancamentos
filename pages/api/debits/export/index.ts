//@ts-ignore
import { debit } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import defaultExporter from "../../../../services/api/excel/defaultExporter";

import getAllToExcel from "../../../../services/api/modules/debit/getAllToExcel";
import listAllService from "../../../../services/api/modules/services/listAll";

export default async function exportDebit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { cols, titles },
  } = req;

  const columns = JSON.parse(cols as string);
  const columnsTitles = JSON.parse(titles as string);

  const services = await listAllService();

  const data = (await getAllToExcel(
    columns,
    "2019-12-31 00:00",
    "2021-12-31 00:00",
    "paymentDate"
  )) as debit[];

  if (!data || !services) {
    return res.status(500).json({
      success: false,
      error: "Não foi possível fazer o download",
    });
  }

  defaultExporter(columnsTitles, data, services, res);
}
