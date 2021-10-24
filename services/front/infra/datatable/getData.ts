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

  console.log(query.filters);

  let filtersQuery = "";
  query.filters.forEach((filter) => {
    filtersQuery = `${filtersQuery}filterFields=${filter.column.field}&filterValues=${filter.value}&`;
  });

  const orderBy = query.orderBy ? `&sortBy=${query.orderBy.field}` : "";
  const orderDirection = query.orderDirection
    ? `&sorting=${query.orderDirection}`
    : "";

  const search = query.search ? `&param=${query.search}` : "";
  const page = query?.page + 1;
  const pageSize = query?.pageSize;
  const separator = path.search(/\?/) > -1 ? "&" : "?";

  const url = `${path}${separator}page=${page}&size=${pageSize}${orderBy}${orderDirection}${search}&${filtersQuery}`;

  return api(url).then((response) => response.json());
}
