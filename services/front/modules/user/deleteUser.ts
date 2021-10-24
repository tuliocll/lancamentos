import api from "../../infra/api";

import { User } from ".prisma/client";

export default async function deleteUserService(id: number): Promise<boolean> {
  try {
    const path = `/api/users/${id}`;
    const respose = await api(path, {
      method: "DELETE",
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
