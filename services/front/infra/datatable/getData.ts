import { Query } from "@material-table/core";

import api from "../../infra/api";

export function getData<DataType extends object>({
  query,
  path,
}: {
  query?: Query<DataType>;
  path: string;
}) {
  if (!query) {
    return api(path).then((response) => response.json());
  }

  //TODO: pegar filters e transformar em query params

  const orderBy = query.orderBy ? `&sortBy=${query.orderBy.field}` : "";
  const orderDirection = query.orderDirection
    ? `&sorting=${query.orderDirection}`
    : "";

  const search = query.search ? `&param=${query.search}` : "";
  const page = query?.page + 1;
  const pageSize = query?.pageSize;
  const separator = path.search(/\?/) > -1 ? "&" : "?";

  const url = `${path}${separator}page=${page}&size=${pageSize}${orderBy}${orderDirection}${search}`;

  return api(url).then((response) => response.json());
}
