import type { NextApiRequest, NextApiResponse } from "next";
import deleteService from "../../../services/api/modules/debit/delete";

import getOne from "../../../services/api/modules/debit/getOne";
import update from "../../../services/api/modules/debit/update";

export default async function handleDebit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const debit = await getOne(Number(id));

        return res.status(200).json({ success: true, content: debit });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: "Não foi possível concluir",
        });
      }

    case "PUT": {
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
      } = req.body;

      const updated = await update(Number(id), {
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
      });

      if (updated) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({
          success: false,
          error: "Não foi possível atualizar o registro",
        });
      }
    }
    case "DELETE": {
      const deleted = await deleteService(Number(id));

      if (deleted) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({
          success: false,
          error: "Não foi possível atualizar o registro",
        });
      }
    }
    default: {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res
        .status(405)
        .json({ success: false, message: `Method ${method} Not Allowed` });
    }
  }
}
