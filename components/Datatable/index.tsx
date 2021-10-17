import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  Ref,
} from "react";
import { ExportPdf } from "@material-table/exporters";
import MaterialTable, {
  Query,
  Column,
  Action,
  Filter,
} from "@material-table/core";
import useSwr from "swr";

import { getData } from "../../services/front/infra/datatable/getData";

export type ResponseBody<T> = {
  content: T[];
  totalPages: number;
  totalElements: number;
};

export type DatatableType<T extends object> = {
  path: string;
  title?: string;
  columns: Column<T>[];
  actions?: Action<T>[];
};

export type DatatableRefType = {
  forceRefresh: () => void;
};

const Datatable = <DataType extends object>(
  { path, columns, actions, title }: DatatableType<DataType>,
  ref: Ref<DatatableRefType>
) => {
  const [query, setQuery] = useState<Partial<Query<DataType>>>();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<{
    field: string;
    direction: "asc" | "desc";
  }>({ field: "", direction: "asc" });
  const [filters, setFilters] = useState<Filter<DataType>[]>();
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState("");
  const { data, mutate: refetch } = useSwr([path, query], () =>
    getData<DataType>({
      query: query as Query<DataType>,
      path,
    })
  );
  const tableRef = useRef<MaterialTable<DataType>>(null);

  useImperativeHandle(ref, () => ({
    forceRefresh() {
      refetch();
    },
  }));

  function handlePageChange(nextPage: number) {
    setPage(nextPage);
  }

  function download(dataurl: string, filename: string) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
    return false;
  }

  async function handleExport(columns: any[]) {
    const cols = columns.map((col) => col.field);
    const titles = columns.map((col) => col.title);

    download(
      `/api/debits/export?cols=${JSON.stringify(cols)}&titles=${JSON.stringify(
        titles
      )}`,
      "teste"
    );
  }

  function handleOrderChange(orderBy: number, direction: "asc" | "desc") {
    setOrder({
      field: (columns[orderBy]?.field as string) || "id",
      direction,
    });
  }

  function handleFilterChange(filter: Filter<DataType>[]) {
    setFilters(filter);
  }

  useEffect(() => {
    setQuery({
      page,
      pageSize,
      search,
      orderDirection: order.direction,
      orderBy: {
        field: order.field,
      },
      filters,
    });
  }, [page, pageSize, search, order, filters]);

  useEffect(() => {
    if (tableRef.current) {
      //@ts-ignore
      tableRef.current.dataManager.searchText = "";
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <MaterialTable<DataType>
      title={title || ""}
      tableRef={tableRef}
      columns={columns}
      onRowsPerPageChange={setPageSize}
      data={data?.content as DataType[]}
      isLoading={!data}
      totalCount={data?.totalElements}
      actions={actions}
      page={page}
      onPageChange={handlePageChange}
      onFilterChange={handleFilterChange}
      onOrderChange={handleOrderChange}
      onSearchChange={(text) => {
        setPage(0);
        setSearch(text);
      }}
      options={{
        actionsColumnIndex: -1,
        loadingType: "linear",
        debounceInterval: 300,
        paginationType: "stepped",
        filtering: true,
        columnsButton: true,
        exportMenu: [
          {
            label: "Export PDF",
            exportFunc: (cols, datas) =>
              ExportPdf(cols, datas, "myPdfFileName"),
          },
          {
            label: "Export CSV",
            exportFunc: (cols, datas) => {
              handleExport(cols);
            },
          },
        ],
        headerStyle: {
          fontWeight: "bold",
        },
      }}
      //   localization={materialTableTranslation}
    />
  );
};

const DatatableOut = forwardRef(Datatable) as <T extends object>(
  props: DatatableType<T> & { ref?: React.ForwardedRef<DatatableRefType> }
) => ReturnType<typeof Datatable>;

export default DatatableOut;
