import api from "../../infra/api";

export async function getAllServicesService(path: string) {
  return api(path).then((response) => response.json());
}
