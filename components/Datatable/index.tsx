import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  Ref,
} from "react";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import MaterialTable, { Query, Column, Action } from "@material-table/core";
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

  useEffect(() => {
    setQuery({
      page,
      pageSize,
      search,
    });
  }, [page, pageSize, search]);

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
            //// You can do whatever you wish in this function. We provide the
            //// raw table columns and table data for you to modify, if needed.
            // exportFunc: (cols, datas) => console.log({ cols, datas })
            exportFunc: (cols, datas) =>
              ExportPdf(cols, datas, "myPdfFileName"),
          },
          {
            label: "Export CSV",
            exportFunc: (cols, datas) => {
              console.log(cols);
              handleExport(cols);
              // ExportCsv(cols, datas, "myCsvFileName.xls");
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
