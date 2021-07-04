import { Form, Button, Col, Row, Input, Select } from 'antd';
import CategoriesArray from '../../../../common/hooks/selectCategories/CategoriesArray';

type Props = {
    createCompetition?: any;
    setVisible?: any;
}

export default function AdminCompetitionCreateForm({
    createCompetition,
    setVisible
}: Props) {
    const { data: categoriesList } = CategoriesArray()


    const initialValues = {
        name: '',
        season: 2020,
        date: '',
        place: '',
        categories: [],
    }

    const categoriesArray = categoriesList?.categories.map((category) => ({
        label: category.name,
        value: category.id,
    }));

    return(
        <>
        <Form layout="vertical" 
          initialValues={initialValues}
          onFinish={(values) => {
            createCompetition({competition: values})
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
                  <Input placeholder={'Nome da Competição'} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="season"
                  label="Ano/Temporada"
                  rules={[{ required: true, message: 'Inserir Temporada (ano)' }]}
                >
                  <Input
                    placeholder="Ano/Temporada"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="place"
                  label="Cidade/UF"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Input placeholder="Cidade/UF" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="categories"
                  label="Categorias"
                  rules={[{ required: false }]}
                >
                  <Select
                    options={categoriesArray}
                    mode="multiple"
                    allowClear={true}
                    placeholder="Selecione"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form>
        </>
    )
}