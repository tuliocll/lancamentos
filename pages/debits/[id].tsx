import React from "react";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  DatePicker,
  message,
} from "antd";
import moment from "moment";
import useSWR from "swr";
import { useRouter } from "next/router";

import fetcher from "../../services/front/infra/fetcher";
import { debit } from ".prisma/client";
const { Option } = Select;

export default function EditUser() {
  const [form] = Form.useForm();

  const router = useRouter();
  const { id } = router.query;

  const { data: services } = useSWR<{
    content: { id: number; name: string }[];
    success: boolean;
  }>("/api/services", fetcher);

  const { data: paymentStatus } = useSWR<{
    content: { id: number; name: string }[];
    success: boolean;
  }>("/api/status", fetcher);

  const { data: operations } = useSWR<{
    content: { id: number; name: string }[];
    success: boolean;
  }>("/api/operations", fetcher);

  const { data: users } = useSWR<{
    content: { id: number; name: string }[];
    success: boolean;
  }>("/api/peoples", fetcher);

  const { data: defaultDebit, mutate } = useSWR<{
    content: debit;
    success: boolean;
  }>(`/api/debits/${id}`, fetcher);

  async function onUpdate(values: debit) {
    const response = await fetch(`/api/debits/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        expiry: values.expiry.toISOString(),
        paymentDate: values.paymentDate.toISOString(),
      }),
    });

    if (response.status > 200) {
      message.error("Não foi possível salvar");
      return;
    }

    message.success("Atualizado com sucesso!");
    mutate();
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

  if (!defaultDebit) {
    return <>loading</>;
  }

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="update"
        onFinish={onUpdate}
        initialValues={{
          ...defaultDebit.content,
          expiry: moment(defaultDebit.content.expiry),
          paymentDate: moment(defaultDebit.content.paymentDate),
        }}
        scrollToFirstError
      >
        <Row>
          <Col md={10} offset={1}>
            <Form.Item
              name="service"
              label="Serviço"
              rules={[
                {
                  required: true,
                  message: "Selecione um serviço",
                },
              ]}
            >
              <Select
                placeholder="Selecione um serviço"
                loading={!services}
                defaultValue={defaultDebit?.content.service}
              >
                {services &&
                  services.content.map((service) => (
                    <Option key={service.name} value={service.name}>
                      {service.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="expiry"
              label="Vencimento"
              rules={[{ required: true, message: "Preencha o vencimento" }]}
            >
              <DatePicker format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              name="provider"
              label="Fornecedor"
              rules={[{ required: true, message: "Preencha o fornecedor" }]}
            >
              <Input defaultValue={defaultDebit.content.provider} />
            </Form.Item>

            <Form.Item
              name="description"
              label="Descrição"
              rules={[{ required: true, message: "Preencha a descrição" }]}
            >
              <Input.TextArea
                rows={4}
                defaultValue={defaultDebit.content.description as string}
              />
            </Form.Item>

            <Form.Item
              name="document"
              label="Nº Documento"
              rules={[{ required: true, message: "Preencha o documento" }]}
            >
              <Input defaultValue={defaultDebit.content.document} />
            </Form.Item>

            <Form.Item
              name="value"
              label="Valor"
              rules={[{ required: true, message: "Preencha o valor" }]}
            >
              <Input defaultValue={defaultDebit.content.value} />
            </Form.Item>

            <Form.Item
              name="operation"
              label="Operação"
              rules={[{ required: true, message: "Preencha a operação" }]}
            >
              <Select
                placeholder="Selecione uma operação"
                loading={!operations}
                defaultValue={defaultDebit.content.operation}
              >
                {operations &&
                  operations.content?.map((operation) => (
                    <Option key={operation.name} value={operation.name}>
                      {operation.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col md={11} offset={1}>
            <Form.Item
              name="bank"
              label="Nº do Banco"
              rules={[{ required: true, message: "Preencha o banco" }]}
            >
              <Input defaultValue={defaultDebit.content.bank} />
            </Form.Item>

            <Form.Item
              name="agency"
              label="Agência"
              rules={[{ required: true, message: "Preencha a agência" }]}
            >
              <Input defaultValue={defaultDebit.content.agency as string} />
            </Form.Item>

            <Form.Item
              name="account"
              label="Conta"
              rules={[{ required: true, message: "Preencha a conta" }]}
            >
              <Input defaultValue={defaultDebit.content.account} />
            </Form.Item>

            <Form.Item
              name="pix"
              label="Chave Pix"
              rules={[{ required: true, message: "Preencha a chave pix" }]}
            >
              <Input defaultValue={defaultDebit.content.pix} />
            </Form.Item>

            <Form.Item
              name="paymentDate"
              label="Pagamento"
              rules={[
                { required: true, message: "Preencha a data de pagamento" },
              ]}
            >
              <DatePicker format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              rules={[
                { required: true, message: "Preencha o tipo de operação" },
              ]}
            >
              <Select
                placeholder="Selecione um status"
                loading={!paymentStatus}
                defaultValue={defaultDebit.content.status}
              >
                {paymentStatus &&
                  paymentStatus.content?.map((status) => (
                    <Option key={status.name} value={status.name}>
                      {status.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="requestedBy"
              label="Solicitado Por"
              rules={[{ required: true, message: "Preencha o solicitante" }]}
            >
              <Select
                placeholder="Selecione uma pessoa"
                loading={!users}
                defaultValue={defaultDebit.content.requestedBy}
              >
                {users &&
                  users.content?.map((user) => (
                    <Option key={user.name} value={user.name}>
                      {user.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="paymentBy"
              label="Pago Por"
              rules={[{ required: true, message: "Selecione uma pessoa!" }]}
            >
              <Select
                placeholder="Selecione uma pessoa"
                loading={!users}
                defaultValue={defaultDebit.content.paymentBy}
              >
                {users &&
                  users.content?.map((user) => (
                    <Option key={user.name} value={user.name}>
                      {user.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Atualizar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
