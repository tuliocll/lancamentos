import type { NextApiRequest, NextApiResponse } from "next";

import create from "../../../services/api/modules/services/create";
import listAll from "../../../services/api/modules/services/listAll";

export default async function handleServices(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET": {
      try {
        const all = await listAll();

        return res.status(200).json({ success: true, content: all });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: "Não foi possível concluir",
        });
      }
    }

    case "POST": {
      const { name } = req.body;

      const created = await create({
        name,
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
        .json({ success: false, message: `Método ${method} não permitido` });
    }
  }
}
