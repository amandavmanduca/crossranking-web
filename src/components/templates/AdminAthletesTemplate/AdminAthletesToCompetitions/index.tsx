import { Form, Button, Col, Row, Input, Select } from 'antd';
import BoxesArray from '../../../../common/hooks/selectBoxes/BoxesArray';
import CategoriesArray from '../../../../common/hooks/selectCategories/CategoriesArray';
import CompetitionsArray from '../../../../common/hooks/selectCompetitions/CompetitionsArray';

type Props = {
  addCompetitionsToAthlete?: any;
  setVisible?: any;
  selectedAthleteData?: any;
}

export default function AdminAthletesToCompetitions({addCompetitionsToAthlete, setVisible, selectedAthleteData}: Props) {

    const { data: competitionsList } = CompetitionsArray()


    const competitionArray = competitionsList?.competitions.map((competition) => ({
        label: competition.name + ' [' + competition.season + ']',
        value: competition.id,
    }));


    const initialValues = {
        id: selectedAthleteData?.id,
        competitions: selectedAthleteData?.competitions?.map((competition: any) => competition.id),
        initialCompetitions: selectedAthleteData?.competitions?.map((competition: any) => competition.id)
    }

    return(
        <>
        <Form layout="vertical" 
          initialValues={initialValues}
          onFinish={(values) => {
            addCompetitionsToAthlete({
                athlete: selectedAthleteData.id,
                competitions: values.competitions,
                initialCompetitions: selectedAthleteData?.competitions?.map((competition: any) => competition.id),
            })
            setVisible(false)
          }}
        >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="competitions"
                  label="Competições"
                  rules={[{ required: false }]}
                >
                  <Select
                    options={competitionArray}
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
    );
}