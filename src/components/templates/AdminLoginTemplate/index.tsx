import { Form, Button, Col, Row, Input } from 'antd';
import { StyledDiv, StyledLayout } from './styles';
import Title from '../../atoms/Title';

type Props = {
    login?: any;
}


export default function AdminLoginTemplate({
    login,
}: Props) {
    return(
        <StyledLayout>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>CrossRanking</h1>
            <h3>Login:</h3>
            <StyledDiv>
                <Form layout="vertical" 
                    style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}
                    // initialValues={initialValues}
                    onFinish={(values) => {
                        login(values)
                    }}
                >
                <Row gutter={24}>
                    <Col span={24}>
                    <Form.Item
                        name="email"
                        // label="Email"
                        rules={[{ required: true, message: 'Campo Obrigatório' }]}
                    >
                        <Input placeholder={'Email'} />
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                    <Form.Item
                        name="password"
                        // label="Senha"
                        rules={[{ required: true, message: 'Campo Obrigatório' }]}
                    >
                        <Input.Password allowClear placeholder="Senha" />
                    </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
                </Form>
            </StyledDiv>
        </StyledLayout>
    )
}