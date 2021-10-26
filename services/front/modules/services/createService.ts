import api from "../../infra/api";

import { Services } from ".prisma/client";

type ErrorResponse = {
  success: boolean;
  message: string;
};

export default async function createServiceService(
  path: string,
  service: Services
): Promise<true | ErrorResponse> {
  try {
    const respose = await api(path, {
      method: "POST",
      body: JSON.stringify(service),
    });

    if (respose.status === 409) {
      const data = await respose.json();

      return {
        success: false,
        message: data.error,
      };
    }

    if (respose.status > 200) {
      return {
        success: false,
        message: "Erro ao cadastrar",
      };
    }

    const data = await respose.json();

    if (!data) {
      return {
        success: false,
        message: "Erro ao cadastrar",
      };
    }

    return true;
  } catch (err) {
    return {
      success: false,
      message: "Erro ao cadastrar",
    };
  }
}
