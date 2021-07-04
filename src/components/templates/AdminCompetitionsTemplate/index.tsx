import { Table, Tag, Space, Drawer, Button, Popconfirm, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import AdminMenu from '../../organisms/AdminMenu';
import AdminDefaultButton from '../../molecules/AdminCreateButton';
import AdminCompetitionCreateForm from '../AdminCompetitionsTemplate/AdminCompetitionCreateForm';
import AdminCompetitionUpdateForm from '../AdminCompetitionsTemplate/AdminCompetitionUpdateForm';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

type Props = {
    tableData?: any;
    createCompetition?: any;
    deleteOneCompetition?: any;
    selectedCompetition?: any;
    setSelectedCompetition?: any;
    selectedCompetitionData?: any;
    updateOneCompetition?: any;
    // addCompetitionsToAthlete?: any;
  }

export default function AdminCompetitionsTemplate({
  tableData,
  createCompetition,
  deleteOneCompetition,
  selectedCompetition,
  setSelectedCompetition,
  selectedCompetitionData,
  updateOneCompetition,
//   addCompetitionsToAthlete,
}: Props) {
    const columns = [
        {
          title: 'Nome',
          dataIndex: '',
          render: (record: {name: any, season: any}) =>
            <>
              <div style={{display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center'}}>
                <a>{record.name + ' [' + record.season + ']'}</a>
              </div>
            </>
        },
        {
        title: 'Categorias',
        dataIndex: 'categories',
        key: 'category',
        render: (categories: any[]) => (
            <>
              {categories.map(category => {
                return (
                  <Tag color={'blue'} key={category.id}>
                    {category.name.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
            title: 'Local',
            dataIndex: '',
            render: (record: {place: any}) =>
              <>
                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center'}}>
                  <a>{record.place}</a>
                </div>
              </>
          },
        {
          title: '',
          dataIndex: '',
          render: (record: { id: any }) => (
            <Space key={record.id} size="middle">
              <Popconfirm
                title={'Deseja deleter essa competição?'}
                onConfirm={() => deleteOneCompetition(record.id)}
              >
                <Tooltip title={'Deletar'}>
                  <DeleteFilled />
                </Tooltip>
              </Popconfirm>
              <Tooltip title={'Editar'}>
                <EditFilled onClick={() => (setSelectedCompetition(record.id), setVisibleUpdate(true))} />
              </Tooltip>
            </Space>
          ),
        },
    ];

    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleToCompetitions, setVisibleToCompetitions] = useState(false);

    const closeModal = () => {
        setVisibleCreate(false);
        setVisibleUpdate(false);
        // setVisibleToCompetitions(false);
        setSelectedCompetition(null);
    }

    return(
        <>
          <AdminMenu />
          <AdminDefaultButton onClick={() => setVisibleCreate(true)}>Nova Competição</AdminDefaultButton>
          <Table columns={columns} dataSource={tableData} />

          <Drawer
                title="Nova Competição"
                width={300}
                onClose={closeModal}
                destroyOnClose={true}
                visible={visibleCreate}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                <div
                    style={{
                    textAlign: 'right',
                    }}
                >
                    <Button onClick={closeModal} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                </div>
                }
            >
                <AdminCompetitionCreateForm createCompetition={createCompetition} setVisible={setVisibleCreate} />
            </Drawer>
          
          {(visibleUpdate && selectedCompetitionData?.id === selectedCompetition) && (
            <Drawer
              title="Editar Competição"
              width={300}
              onClose={closeModal}
              destroyOnClose={true}
              visible={visibleUpdate}
              bodyStyle={{ paddingBottom: 80 }}
              footer={
                <div
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <Button onClick={closeModal} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                </div>
              }
            >
              <AdminCompetitionUpdateForm updateOneCompetition={updateOneCompetition} setVisible={setVisibleUpdate} selectedCompetitionData={selectedCompetitionData} />
            </Drawer>
          )}
        </>
    );
}