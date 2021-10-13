//@ts-ignore
import xl from "excel4node";
import type { NextApiRequest, NextApiResponse } from "next";

import getAllToExcel from "../../../../services/api/modules/debit/getAllToExcel";

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

  const data = await getAllToExcel(
    columns,
    "2019-12-31 00:00",
    "2021-12-31 00:00",
    "paymentDate"
  );

  if (!data) {
    return res.status(500).json({
      success: false,
      error: "Não foi possível fazer o download",
    });
  }

  const wb = new xl.Workbook();
  const ws = wb.addWorksheet("Despesas");

  const headingColumnNames = columnsTitles;

  const headerStyle = wb.createStyle({
    font: {
      bold: true,
      size: 15,
    },
    alignment: {
      horizontal: "center",
      vertical: "center",
    },
    border: {
      outline: true,
      bottom: {
        color: "black",
        style: "thin",
      },
      top: {
        color: "black",
        style: "thin",
      },
      left: {
        color: "black",
        style: "thin",
      },
      right: {
        color: "black",
        style: "thin",
      },
    },
  });

  //Write Column Title in Excel file
  let headingColumnIndex = 1;
  headingColumnNames.forEach((heading) => {
    let index = headingColumnIndex++;
    ws.cell(1, index).string(heading).style(headerStyle);

    ws.column(index).setWidth(20);
  });

  ws.row(1).setHeight(40);
  //Write Data in Excel file
  let rowIndex = 2;
  data.forEach((record) => {
    let columnIndex = 1;
    Object.keys(record).forEach((columnName) => {
      if (typeof record[columnName] === "object") {
        ws.cell(rowIndex, columnIndex++)
          .date(new Date(record[columnName]).toISOString())
          .style({ numberFormat: "dd/mm/yyyy" });
      } else {
        ws.cell(rowIndex, columnIndex++).string(record[columnName]);
      }
    });
    rowIndex++;
  });
  wb.write("TeacherData.xlsx", res);
}
