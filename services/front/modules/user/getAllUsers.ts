import api from "../../infra/api";

export function getAllUsersService(path: string) {
  return api(path).then((response) => response.json());
}
