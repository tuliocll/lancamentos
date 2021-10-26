import api from "../../infra/api";

import { Services } from ".prisma/client";

export default async function getOneServiceService(
  id: number
): Promise<undefined | Services> {
  const path = `/api/services/${id}`;
  try {
    const respose = await api(path);

    if (respose.status > 200) {
      return undefined;
    }

    const data = await respose.json();

    if (!data) {
      return undefined;
    }

    return data.content;
  } catch (err) {
    return undefined;
  }
}
