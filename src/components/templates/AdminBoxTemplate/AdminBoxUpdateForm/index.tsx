import { Form, Button, Col, Row, Input } from 'antd';

type Props = {
  updateOneBox?: any;
  setVisible?: any;
  selectedBoxData?: any;
}

export default function AdminBoxUpdateForm({updateOneBox, setVisible, selectedBoxData}: Props) {

    const initialValues = {
        id: selectedBoxData?.id,
        name: selectedBoxData?.name,
        logo: selectedBoxData?.logo,
        city: selectedBoxData?.city,
      }

    return (
        <>
        <Form layout="vertical" 
          initialValues={initialValues}
          onFinish={(values) => {
            updateOneBox({
                id: selectedBoxData?.id,
                update: values
            })
            setVisible(false)
          }}
        >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Nome"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Input placeholder={'Nome do Box'} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="logo"
                  label="Logo"
                  rules={[{ required: true, message: 'Inserir Endereço do Logo' }]}
                >
                  <Input
                    placeholder="Endereço do Logo"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="city"
                  label="Cidade/UF"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Input placeholder="Cidade/UF" />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form>
        </>
    );
}