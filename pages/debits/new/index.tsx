import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Button,
  DatePicker,
  message,
} from "antd";
import useSWR from "swr";

import fetcher from "../../../services/front/infra/fetcher";
import { debit } from ".prisma/client";
const { Option } = Select;

export default function New() {
  const [form] = Form.useForm();

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

  async function onFinish(values: debit) {
    console.log("Received values of form: ", values.expiry.toISOString());

    const response = await fetch("/api/debits", {
      method: "POST",
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

    message.success("Salvo com sucesso!");
    form.resetFields();
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

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Row>
          <Col md={10} offset={1}>
            <Form.Item
              name="service"
              label="Serviço"
              rules={[{ required: true, message: "Selecione um serviço" }]}
            >
              <Select placeholder="Selecione um serviço" loading={!services}>
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
              <Input />
            </Form.Item>

            <Form.Item
              name="description"
              label="Descrição"
              rules={[{ required: true, message: "Preencha a descrição" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="document"
              label="Nº Documento"
              rules={[{ required: true, message: "Preencha o documento" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="value"
              label="Valor"
              rules={[{ required: true, message: "Preencha o valor" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="operation"
              label="Operação"
              rules={[{ required: true, message: "Preencha a operação" }]}
            >
              <Select
                placeholder="Selecione uma operação"
                loading={!operations}
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
              <Input />
            </Form.Item>

            <Form.Item
              name="agency"
              label="Agência"
              rules={[{ required: true, message: "Preencha a agência" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="account"
              label="Conta"
              rules={[{ required: true, message: "Preencha a conta" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="pix"
              label="Chave Pix"
              rules={[{ required: true, message: "Preencha a chave pix" }]}
            >
              <Input />
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
              <Select placeholder="Selecione uma pessoa" loading={!users}>
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
              <Select placeholder="Selecione uma pessoa" loading={!users}>
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
            Lançar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
