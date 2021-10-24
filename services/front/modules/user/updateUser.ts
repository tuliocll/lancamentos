import api from "../../infra/api";

import { User } from ".prisma/client";

export default async function updateUserService(
  id: number,
  user: Partial<User>
): Promise<boolean> {
  try {
    const path = `/api/users/${id}`;
    const respose = await api(path, {
      method: "PUT",
      body: JSON.stringify(user),
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
