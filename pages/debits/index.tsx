import React, { useState } from "react";
import { Column, Action } from "@material-table/core";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

import Datatable from "../../components/Datatable";
import { debit } from ".prisma/client";
import { useRouter } from "next/router";

export default function ListDebits() {
  const router = useRouter();

  const columns: Column<any>[] = [
    { title: "Serviço", field: "service" },
    { title: "Vencimento", field: "expiry", type: "date", filtering: false },
    { title: "Fornecedor", field: "provider" },
    { title: "Descrição", field: "description" },
    { title: "N. Documento", field: "document" },
    { title: "Valor", field: "value" },
    { title: "Operação", field: "operation" },
    { title: "N. Banco", field: "bank" },
    { title: "Agência", field: "agency" },
    { title: "Conta", field: "account" },
    { title: "Chave Pix", field: "pix" },
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

  function handleEdit(event: any, row: debit) {
    router.push(`/debits/${row.id}`);
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
        path="http://localhost:3000/api/debits"
        title="Despesas"
        actions={actions}
      />
    </>
  );
}
