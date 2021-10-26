import { useEffect, useState } from "react";
import { Table, Button, Space, message, Popconfirm } from "antd";
import Router from "next/router";
import useSwr from "swr";

import { getAllServicesService } from "../../services/front/modules/services/getAllServices";
import deleteService from "../../services/front/modules/services/deleteService";

export default function ListUsers() {
  const { data, mutate: refetch } = useSwr("/api/services", () =>
    getAllServicesService("/api/services")
  );

  const [page, setPage] = useState(1);
  const [totalRegisters, setTotalRegisters] = useState(0);
  const [size, setSize] = useState(5);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ação",
      key: "action",
      render: (text: any, record: any) => {
        return (
          <Space size="middle">
            <Popconfirm
              title="Deseja deletar este serviço?"
              onConfirm={() => handleDelete(record.id)}
              okText="Sim"
              cancelText="Não"
            >
              <a className="danger">Deletar</a>
            </Popconfirm>
            <a onClick={() => handleEdit(record.id)}>Editar</a>
          </Space>
        );
      },
    },
  ];

  async function handleDelete(id: number) {
    const response = await deleteService(id);

    if (!response) {
      message.error("Não foi possível deletar o usuário");
      return;
    }

    refetch();
  }

  function handleEdit(id: number) {
    Router.push(`/services/${id}`);
  }

  function handleChangePage(pageNumber: number, pageSize?: number) {
    setPage(pageNumber);
  }

  useEffect(() => {
    if (data && data.totalPages) setTotalRegisters(data.totalElements);
  }, [data]);

  return (
    <>
      <Button type="primary" href="/services/new">
        Criar novo
      </Button>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data?.content}
        pagination={{
          pageSize: size,
          current: page,
          onChange: handleChangePage,
          total: totalRegisters,
        }}
      />
    </>
  );
}
