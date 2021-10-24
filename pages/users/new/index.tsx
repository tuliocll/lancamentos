import {
  Form,
  Input,
  Row,
  Col,
  Button,
  message,
  Typography,
  Divider,
} from "antd";
import Link from "next/link";

import { User } from ".prisma/client";
import createUserService from "../../../services/front/modules/user/createUser";

export type NewUserType = User & {
  rePassword: string;
};

export default function NewUser() {
  const [form] = Form.useForm();

  async function onFinish(values: NewUserType) {
    if (values.password !== values.rePassword) {
      message.error("Senha não confere!");
      return;
    }

    const response = await createUserService("/api/users", values);

    if (!response) {
      message.error("Não foi possível salvar");
      return;
    }

    message.success("Criado com sucesso!");
    form.resetFields();
  }

  return (
    <>
      <Typography.Title>Novo usuário</Typography.Title>
      <Typography>Criar novo usuário para acessar o sistema.</Typography>
      <Divider />

      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
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

            <Form.Item
              name="password"
              label="Senha"
              rules={[{ required: true, message: "Preencha a senha" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="rePassword"
              label="Repita a senha"
              rules={[
                { required: true, message: "Preencha a confirmação de senha" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Criar
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
