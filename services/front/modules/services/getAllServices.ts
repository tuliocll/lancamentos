import api from "../../infra/api";

export function getAllServicesService(path: string) {
  return api(path).then((response) => response.json());
}
