import {
  Form,
  Input,
  Row,
  Col,
  Button,
  message,
  Typography,
  Divider,
  Spin,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import { User } from ".prisma/client";
import updateUserService from "../../services/front/modules/user/updateUser";
import { useEffect, useState } from "react";
import getOneUserService from "../../services/front/modules/user/getOneUser";

export default function NewUser() {
  const [editUser, setEditUser] = useState<User>();

  const router = useRouter();
  const { id } = router.query;

  const [form] = Form.useForm();

  async function onFinish(values: User) {
    const response = await updateUserService(Number(id), values);

    if (!response) {
      message.error("Não foi possível salvar");
      return;
    }

    message.success("Atualizado com sucesso!");
    window.location.href = "/users";
  }

  async function getUser() {
    const response = await getOneUserService(Number(id));

    if (!response) {
      window.location.href = "/users";
      return;
    }

    setEditUser(response);
  }

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  if (!editUser) {
    return <Spin />;
  }

  return (
    <>
      <Typography.Title>Editar usuário</Typography.Title>
      <Typography>Editar usuário do sistema.</Typography>
      <Divider />

      <Form
        initialValues={editUser}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Row>
          <Col md={10} offset={1}>
            <Form.Item
              name="name"
              label="Nome"
              rules={[{ required: true, message: "Preencha o nome" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Preencha o email", type: "email" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Atualizar
            </Button>
          </Form.Item>
          <Form.Item>
            <Link href="/users">
              <Button size="large">Voltar</Button>
            </Link>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
}

NewUser.auth = false;
