import api from "../../infra/api";

export default async function deleteServiceService(
  id: number
): Promise<boolean> {
  try {
    const path = `/api/services/${id}`;
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
