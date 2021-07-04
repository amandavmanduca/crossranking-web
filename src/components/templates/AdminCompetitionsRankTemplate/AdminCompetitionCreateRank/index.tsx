import { Form, Button, Col, Row, Input, Select } from 'antd';
import { init } from 'aos';
import { valueFromAST, ValuesOfCorrectTypeRule } from 'graphql';
import { useState } from 'react';
import CategoriesArray from '../../../../common/hooks/selectCategories/CategoriesArray';

type Props = {
    createAthleteRank?: any;
    athlete?: any;
    totalAthletes?: any;
    selectedCompetition?: any;
    selectedCategory?: any;
    updateAthleteRank?: any;
}

export default function AdminCompetitionCreateRank({
    createAthleteRank,
    athlete,
    totalAthletes,
    selectedCompetition,
    selectedCategory,
    updateAthleteRank
}: Props) {

    const initialValues = {
        competitionRank: athlete?.competitionRanks?.filter((comp: any) => comp.competition.id === selectedCompetition).length > 0 ? athlete?.competitionRanks?.filter((comp: any) => comp.competition.id === selectedCompetition)[0].id : '',
        rank: athlete?.competitionRanks?.filter((comp: any) => comp.competition.id === selectedCompetition).length > 0 ? athlete?.competitionRanks?.filter((comp: any) => comp.competition.id === selectedCompetition)[0].rank : '',
        points: athlete?.competitionRanks?.filter((comp: any) => comp.competition.id === selectedCompetition).length > 0 ? athlete?.competitionRanks?.filter((comp: any) => comp.competition.id === selectedCompetition)[0].points : '',
        competition: selectedCompetition,
        athlete: athlete?.id,
        category: selectedCategory,
    }

    const [showSign, setShowSign] = useState(false);

    const [form] = Form.useForm<any>();

    const onRankChange = (value: any) => {
      console.log(form.getFieldValue('rank'));
      if(form.getFieldValue('rank') > 0 && form.getFieldValue('rank') <= totalAthletes) {
        form.setFieldsValue({
          points: (100/totalAthletes * (totalAthletes - form.getFieldValue('rank') + 1)).toFixed(0),
        });
      } else {
        form.setFieldsValue({
          points: '',
        });
      }
    }

    return(
      
        <>
        <Form layout="inline"
          name="control-hooks"
          form={form}
          initialValues={initialValues}
          style={{padding: '10px'}}
          onValuesChange={(values) => setShowSign(true)}
          onFinish={(values) => {
            if(initialValues.competitionRank === '') {
              createAthleteRank(values)
            } else {
              updateAthleteRank(values)
            }
            
            setShowSign(false);
          }}
        >
          <>
            <h4 style={{width: '200px'}}>{athlete.firstname}</h4>
            <h4 style={{width: '200px'}}>{athlete.lastname}</h4>
            
            <Form.Item
              name="rank"
              rules={[{ required: true, message: 'Campo Obrigatório' }]}
            >
              <Input placeholder={'Rank'} onChange={onRankChange} />
            </Form.Item>

            <Form.Item
              name="points"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
            >

            </Form.Item>
            <Form.Item
              name="athlete"
            >

            </Form.Item>
            <Form.Item
              name="competition"
            >

            </Form.Item>
            <Form.Item
              name="competitionRank"
            >

            </Form.Item>
          </>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
          {showSign && (
              <Button type="ghost" htmlType="submit" disabled={true}>
                  Atualizar
              </Button>
          )}
        </Form>
      </>
    )
}