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

import { Services } from ".prisma/client";
import createService from "../../../services/front/modules/services/createService";

export default function NewUser() {
  const [form] = Form.useForm();

  async function onFinish(values: Services) {
    const response = await createService("/api/services", values);

    if (typeof response === "object") {
      message.error(response.message);
      return;
    }

    message.success("Criado com sucesso!");
    form.resetFields();
  }

  return (
    <>
      <Typography.Title>Novo serviço</Typography.Title>
      <Typography>Criar novo serviço.</Typography>
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
          </Col>
        </Row>
        <Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Criar
            </Button>
          </Form.Item>
          <Form.Item>
            <Link href="/services">
              <Button size="large">Voltar</Button>
            </Link>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
}

NewUser.auth = false;
