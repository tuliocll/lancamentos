import api from "../../infra/api";

import { User } from ".prisma/client";

export default async function createUserService(
  path: string,
  user: User
): Promise<boolean> {
  try {
    const respose = await api(path, {
      method: "POST",
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
