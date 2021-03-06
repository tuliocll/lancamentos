import type { NextApiRequest, NextApiResponse } from "next";

import create from "../../../services/api/modules/users/create";
import listAll from "../../../services/api/modules/users/listAll";
import getOne from "../../../services/api/modules/users/getOne";

export default async function handleStatus(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const { size, page } = query;

  switch (method) {
    case "GET": {
      try {
        const all = await listAll({
          size: Number(size) || 5,
          page: Number(page) || 0,
        });

        return res.status(200).json({ success: true, ...all });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: "Não foi possível concluir",
        });
      }
    }

    case "POST": {
      const { name, email, password } = req.body;

      const checkEmail = await getOne({
        email,
      });

      if (checkEmail) {
        return res.status(409).json({
          success: false,
          error: "Email já em uso",
        });
      }

      const created = await create({
        name,
        email,
        password,
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
