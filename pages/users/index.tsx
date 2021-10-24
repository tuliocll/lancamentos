import { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import useSwr from "swr";
import { getAllUsersService } from "../../services/front/modules/user/getAllUsers";

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
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Deletar</a>
        <a>Editar</a>
      </Space>
    ),
  },
];

export default function ListUsers() {
  const { data, mutate: refetch } = useSwr("/api/users", () =>
    getAllUsersService("/api/users")
  );

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState(1);

  function handleChangePage(pageNumber: number, pageSize?: number) {
    setPage(pageNumber);
  }

  useEffect(() => {
    if (data && data.totalPages) setTotalPages(data.totalPages);
  }, [data]);

  return (
    <>
      <Button type="primary" href="/users/new">
        Criar novo
      </Button>
      <Table
        columns={columns}
        dataSource={data?.content}
        pagination={{
          pageSize: size,
          current: page,
          onChange: handleChangePage,
          total: totalPages,
        }}
      />
    </>
  );
}
