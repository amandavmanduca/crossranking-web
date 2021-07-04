import { Form, Button, Col, Row, Input, Select } from 'antd';
import CategoriesArray from '../../../../common/hooks/selectCategories/CategoriesArray';

type Props = {
    updateOneCompetition?: any;
    setVisible?: any;
    selectedCompetitionData?: any;
}

export default function AdminCompetitionUpdateForm({
    updateOneCompetition,
    setVisible,
    selectedCompetitionData
}: Props) {
    const { data: categoriesList } = CategoriesArray()


    const initialValues = {
        id: selectedCompetitionData?.id,
        name: selectedCompetitionData?.name,
        season: selectedCompetitionData?.season,
        date: '',
        place: selectedCompetitionData?.place,
        categories: selectedCompetitionData?.categories.map((category: any) => category.id),
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
            updateOneCompetition({competition: values})
            setVisible(false)
          }}
        >
            <Form.Item
                  name="id"
                >
            </Form.Item>
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