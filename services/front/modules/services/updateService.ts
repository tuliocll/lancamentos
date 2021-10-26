import api from "../../infra/api";

import { Services } from ".prisma/client";

export default async function updateServicesService(
  id: number,
  service: Partial<Services>
): Promise<boolean> {
  try {
    const path = `/api/services/${id}`;
    const respose = await api(path, {
      method: "PUT",
      body: JSON.stringify(service),
    });

    if (respose.status > 200) {
      return false;
    }

    const data = await respose.json();

    if (!data) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}
