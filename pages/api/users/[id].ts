import type { NextApiRequest, NextApiResponse } from "next";

import deleteService from "../../../services/api/modules/users/delete";
import getOne from "../../../services/api/modules/users/getOne";
import update from "../../../services/api/modules/users/update";

export default async function handleStatus(
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
        const one = await getOne({ id: Number(id) });

        return res.status(200).json({ success: true, content: one });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: "Não foi possível concluir",
        });
      }

    case "PUT": {
      const { name, email } = req.body;

      const checkEmail = await getOne({
        email,
      });

      if (checkEmail && checkEmail.id !== Number(id)) {
        return res.status(409).json({
          success: false,
          error: "Email já em uso",
        });
      }

      const updated = await update(Number(id), {
        name,
        email,
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
