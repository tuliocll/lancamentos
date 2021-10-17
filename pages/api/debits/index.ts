import type { NextApiRequest, NextApiResponse } from "next";

import create from "../../../services/api/modules/debit/create";
import listAll from "../../../services/api/modules/debit/listAll";

export default async function handleDebit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const {
    size,
    page,
    sorting,
    sortBy,
    search,
    initialDate,
    finalDate,
    filterFields,
    filterValues,
  } = query;

  let filterFieldsParsed;
  let filterValuesParsed;

  if (filterFields && filterValues) {
    filterFieldsParsed = Array.isArray(filterFields)
      ? filterFields
      : [filterFields];
    filterValuesParsed = Array.isArray(filterValues)
      ? filterValues
      : [filterValues];
  }

  switch (method) {
    case "GET": {
      try {
        const allDebits = await listAll({
          size: Number(size) || 5,
          page: Number(page) || 1,
          order: (sorting as "asc" | "desc") || "asc",
          orderBy: (sortBy as string) || "id",
          search: (search as string) || "",
          initialDate: initialDate as string,
          finalDate: finalDate as string,
          filterFields: filterFieldsParsed,
          filterValues: filterValuesParsed,
        });

        return res.status(200).json({ success: true, ...allDebits });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: "Não foi possível concluir",
        });
      }
    }

    case "POST": {
      const {
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
      } = req.body;

      const created = await create({
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
      });

      if (created) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({
          success: false,
          error: "Não foi possível inserir o registro",
        });
      }
    }
    default: {
      res.setHeader("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false, message: `Method ${method} Not Allowed` });
    }
  }
}
