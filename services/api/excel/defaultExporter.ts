import { NextApiResponse } from "next";
import xl from "excel4node";

import { debit, Services } from ".prisma/client";

export default function defaultExporter(
  columns: string[],
  data: debit[],
  services: Services[],
  response: NextApiResponse
) {
  let total = 0;

  const wb = new xl.Workbook();
  const ws = wb.addWorksheet("Movimentação");

  const headingColumnNames = columns;

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

  const subTotalStyle = wb.createStyle({
    font: {
      bold: true,
    },
  });

  const subHeaderStyle = wb.createStyle({
    fill: {
      type: "pattern",
      bgColor: "EEEEEE",
      patternType: "gray0625",
    },
  });

  const totalHeaderStyle = wb.createStyle({
    fill: {
      type: "pattern",
      bgColor: "AFAFAF",
      patternType: "gray0625",
    },
  });

  const celStyle = wb.createStyle({
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

  // Criando header das colunas
  let headingColumnIndex = 1;
  headingColumnNames.forEach((heading) => {
    let index = headingColumnIndex++;
    ws.cell(1, index).string(heading).style(headerStyle);

    ws.column(index).setWidth(30);
  });

  ws.row(1).setHeight(40);

  // Exibindo todas os serviços e os registro de cada uma dela.
  let rowIndex1 = 2;
  services.forEach((sub, index) => {
    ws.cell(rowIndex1, 1).string(sub.name);

    ws.cell(rowIndex1, 1, rowIndex1, headingColumnNames.length).style(
      subHeaderStyle
    );

    rowIndex1++;

    let subTotalValue = 0;

    data.forEach((record) => {
      if (record.service === sub.name) {
        let columnIndex = 2;

        const value = record.value.replace(",", ".");

        subTotalValue += Number(value);

        const columnsNames = Object.keys(record) as Array<keyof debit>;

        columnsNames.forEach((columnName) => {
          if (columnName === "service") return;

          let celValue = record[columnName];

          if (celValue instanceof Date) {
            ws.cell(rowIndex1, columnIndex++)
              .date(new Date(celValue))
              .style(celStyle)
              .style({ numberFormat: "dd/mm/yyyy" });
          } else {
            if (typeof celValue === "number") {
              ws.cell(rowIndex1, columnIndex++)
                .number(Number(value))
                .style(celStyle)
                .style({ numberFormat: "R$#,##0.00; (R$#,##0.00); -" });
            } else if (typeof celValue === "string") {
              ws.cell(rowIndex1, columnIndex++)
                .string(celValue)
                .style(celStyle);
            }
          }
        });
        rowIndex1++;
      }
    });

    // Adicionando subtotal para cada serviço
    ws.cell(rowIndex1, 1).string("SUBTOTAL").style(subTotalStyle);
    if (subTotalValue > 0) {
      ws.cell(rowIndex1, 6)
        .number(subTotalValue)
        .style(subTotalStyle)
        .style({ numberFormat: "R$#,##0.00; (R$#,##0.00); -" });

      // O serviço "Caixa" não entra no total, se trata de uma receita.
      if (sub.id !== 10) {
        total += subTotalValue;
      }
    }
    rowIndex1++;
  });

  // Criando linha com totalizador
  const totalSpace = 2;
  ws.cell(rowIndex1 + totalSpace, 1)
    .string("TOTAL")
    .style(subTotalStyle);
  ws.cell(rowIndex1 + totalSpace, 6)
    .number(total)
    .style(subTotalStyle)
    .style({ numberFormat: "R$#,##0.00; (R$#,##0.00); -" });

  ws.cell(
    rowIndex1 + totalSpace,
    1,
    rowIndex1 + totalSpace,
    headingColumnNames.length
  ).style(totalHeaderStyle);

  //@ts-ignore
  wb.write("TeacherData.xlsx", response);
}
