import React, { useState } from "react";
import { Column, Action, Filter } from "@material-table/core";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

import Datatable from "../../components/Datatable";
import { debit } from ".prisma/client";
import { useRouter } from "next/router";

const columnsInitialState: Column<any>[] = [
  { title: "Serviço", field: "service", hiddenByColumnsButton: true },
  { title: "Vencimento", field: "expiry", type: "date", filtering: false },
  { title: "Fornecedor", field: "provider" },
  { title: "Descrição", field: "description" },
  { title: "N. Documento", field: "document" },
  { title: "Valor", field: "value" },
  { title: "Operação", field: "operation" },
  { title: "N. Banco", field: "bank" },
  { title: "Agência", field: "agency" },
  { title: "Conta", field: "account" },
  {
    title: "Chave Pix",
    field: "pix",
  },
  {
    title: "Data de pagamento",
    field: "paymentDate",
    type: "date",
    filtering: false,
  },
  { title: "Status", field: "status" },
  { title: "Solicitador por", field: "requestedBy" },
  { title: "Pago por", field: "paymentBy" },
  { title: "Criado em", field: "created_at", hidden: true },
  { title: "Atualizado em", field: "updated_at", hidden: true },
];

export default function ListDebits() {
  const router = useRouter();

  const [columns, setColumns] = useState<Column<any>[]>(columnsInitialState);

  function handleEdit(event: any, row: debit) {
    router.push(`/debits/${row.id}`);
  }

  function handleChangeFilter(filters: Filter<debit>[]) {
    const newState: Column<any>[] = [];

    if (filters.length === 0) {
      setColumns(columnsInitialState);
      return;
    }

    columns.forEach((col) => {
      filters.forEach((filter) => {
        if (filter.column.field === col.field) {
          newState.push({
            ...col,
            defaultFilter: filter.value,
          });
        } else {
          newState.push(col);
        }
      });
    });

    setColumns(newState);
  }

  const actions: Action<any>[] = [
    {
      icon: () => <EditFilled />,
      onClick: handleEdit,
      tooltip: "Editar registro",
    },
    {
      icon: () => <DeleteFilled />,
      onClick: () => console.log("oi"),
      tooltip: "Deletar registro",
    },
  ];

  return (
    <>
      <Datatable
        columns={columns}
        path="/api/debits"
        title="Despesas"
        actions={actions}
        onChangeFilter={handleChangeFilter}
      />
    </>
  );
}

ListDebits.auth = true;
