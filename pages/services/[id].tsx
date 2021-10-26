import { useEffect, useState } from "react";
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

import { Services } from ".prisma/client";
import updateService from "../../services/front/modules/services/updateService";
import getOneService from "../../services/front/modules/services/getOneService";

export default function EditService() {
  const [editUser, setEditUser] = useState<Services>();
  const router = useRouter();
  const { id } = router.query;
  const [form] = Form.useForm();

  async function onFinish(values: Services) {
    const response = await updateService(Number(id), values);

    if (!response) {
      message.error("Não foi possível salvar");
      return;
    }

    message.success("Atualizado com sucesso!");
    window.location.href = "/services";
  }

  async function getService() {
    const response = await getOneService(Number(id));

    if (!response) {
      window.location.href = "/services";
      return;
    }

    setEditUser(response);
  }

  useEffect(() => {
    if (id) {
      getService();
    }
  }, [id]);

  if (!editUser) {
    return <Spin />;
  }

  return (
    <>
      <Typography.Title>Editar serviço</Typography.Title>
      <Typography>Editar serviço do sistema.</Typography>
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
          </Col>
        </Row>
        <Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Atualizar
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

EditService.auth = false;
