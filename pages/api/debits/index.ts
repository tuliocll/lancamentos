import type { NextApiRequest, NextApiResponse } from "next";

import create from "../../../services/api/modules/debit/create";
import listAll from "../../../services/api/modules/debit/listAll";

export default async function handleDebit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET": {
      try {
        const allDebits = await listAll();

        return res.status(200).json({ success: true, content: allDebits });
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
        console.log(
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
          agency
        );
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
