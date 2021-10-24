import { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import useSwr from "swr";
import Router from "next/router";

import { getAllUsersService } from "../../services/front/modules/user/getAllUsers";

export default function ListUsers() {
  const { data, mutate: refetch } = useSwr("/api/users", () =>
    getAllUsersService("/api/users")
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Criado em",
      dataIndex: "createdAt",
      key: "created_at",
    },
    {
      title: "Ação",
      key: "action",
      render: (text: any, record: any) => {
        console.log(record, "click");
        return (
          <Space size="middle">
            <a onClick={() => handleDelete(record.id)}>Deletar</a>
            <a onClick={() => handleEdit(record.id)}>Editar</a>
          </Space>
        );
      },
    },
  ];

  function handleDelete(id: number) {}

  function handleEdit(id: number) {
    Router.push(`/users/${id}`);
  }

  function handleChangePage(pageNumber: number, pageSize?: number) {
    setPage(pageNumber);
  }

  useEffect(() => {
    if (data && data.totalPages) setTotalRegisters(data.totalElements);
  }, [data]);

  return (
    <>
      <Button type="primary" href="/users/new">
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
