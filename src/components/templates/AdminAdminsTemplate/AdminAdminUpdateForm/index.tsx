import { Form, Button, Col, Row, Input, Select } from 'antd';


type Props = {
  updateAdmin?: any;
  setVisible?: any;
  selectedAdminData?: any;
}

export default function AdminAdminUpdateForm({updateAdmin, setVisible, selectedAdminData}: Props) {

    const initialValues = {
        name: selectedAdminData?.name,
        email: selectedAdminData?.email,
        password: '',
    }

    return(
        <>
        <Form layout="vertical" 
          initialValues={initialValues}
          onFinish={(values) => {
            updateAdmin({
              admin: values,
              id: selectedAdminData?.id
            })
            setVisible(false);
          }}
        >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Nome"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Input placeholder={'Nome'} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[{ required: true, type: 'email', message: 'Campo Obrigatório' }]}
                >
                  <Input placeholder={'E-mail'} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
              <Form.Item
                    name="password"
                    label="Nova Senha"
                    hasFeedback
                    rules={[{ required: false },
                    ({
                        validator(_, value) {
                          var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                          if (strongRegex.test(value) === true || value === '' ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('A senha deve conter pelo menos 8 caracteres, letras maiúsculas, minúsculas e caracteres especiais.'));
                        },
                      }),
                    ]}
                >
                    <Input.Password allowClear />
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