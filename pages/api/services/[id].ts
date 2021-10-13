import type { NextApiRequest, NextApiResponse } from "next";

import deleteService from "../../../services/api/modules/services/delete";
import getOne from "../../../services/api/modules/services/getOne";
import update from "../../../services/api/modules/services/update";

export default async function handleServices(
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
        const one = await getOne(Number(id));

        return res.status(200).json({ success: true, content: one });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: "Não foi possível concluir",
        });
      }

    case "PUT": {
      const { name } = req.body;

      const updated = await update(Number(id), {
        name,
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
          error: "Não foi possível deletar o registro",
        });
      }
    }
    default: {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res
        .status(405)
        .json({ success: false, message: `Método ${method} não permitido` });
    }
  }
}
