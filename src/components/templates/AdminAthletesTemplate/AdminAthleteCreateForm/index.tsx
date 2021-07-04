import { Form, Button, Col, Row, Input, Select } from 'antd';
import BoxesArray from '../../../../common/hooks/selectBoxes/BoxesArray';
import CategoriesArray from '../../../../common/hooks/selectCategories/CategoriesArray';

type Props = {
  createAthlete?: any;
  setVisible?: any;
}

export default function AdminAthleteCreateForm({createAthlete, setVisible}: Props) {

  const { data: categoriesList } = CategoriesArray()
  const { data: boxesList } = BoxesArray()

  const initialValues = {

  }

  const categoriesArray = categoriesList?.categories.map((category: any) => ({
    label: category.name,
    value: category.id,
  }));

  const boxesArray = boxesList?.boxes.map((box: any) => ({
    label: box.name,
    value: box.id,
  }));

    return(
        <>
        <Form layout="vertical" 
          initialValues={initialValues}
          onFinish={(values) => {
            createAthlete({
              athlete: values
            })
            setVisible(false)
          }}
        >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="firstname"
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
                  name="lastname"
                  label="Sobrenome"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Input placeholder={'Sobrenome'} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="categoryId"
                  label="Categoria"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Select
                    options={categoriesArray}
                    allowClear={true}
                    placeholder="Selecione"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="boxId"
                  label="Box"
                  rules={[{ required: true, message: 'Campo Obrigatório' }]}
                >
                  <Select
                    options={boxesArray}
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
    );
}