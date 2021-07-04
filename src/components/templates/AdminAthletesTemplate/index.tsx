import { Table, Tag, Space, Drawer, Button, Popconfirm, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import AdminAthleteCreateForm from './AdminAthleteCreateForm';
import AdminAthleteUpdateForm from './AdminAthleteUpdateForm';
import AdminAthletesToCompetitions from './AdminAthletesToCompetitions';
import AdminMenu from '../../organisms/AdminMenu';
import AdminDefaultButton from '../../molecules/AdminCreateButton';
import { DeleteFilled, EditFilled, FolderAddFilled } from '@ant-design/icons';

type Props = {
    tableData?: any;
    createAthlete?: any;
    deleteOneAthlete?: any;
    selectedAthlete?: any;
    setSelectedAthlete?: any;
    selectedAthleteData?: any;
    updateOneAthlete?: any;
    addCompetitionsToAthlete?: any;
  }

export default function AdminAthletesTemplate({
  tableData,
  createAthlete,
  deleteOneAthlete,
  selectedAthlete,
  setSelectedAthlete,
  selectedAthleteData,
  updateOneAthlete,
  addCompetitionsToAthlete,
}: Props) {
    const columns = [
        {
          title: 'Nome',
          dataIndex: '',
          render: (record: {firstname: any, lastname: any}) =>
            <>
              <div style={{display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center'}}>
                <a>{record.firstname + ' ' + record.lastname}</a>
              </div>
            </>
        },
        {
          title: 'Categoria',
          dataIndex: 'category',
          key: 'category',
          render: (record: any) => {
            return record.name;
          },
        },
        {
          title: 'Box',
          dataIndex: 'box',
          key: 'box',
          render: (record: any) => {
            return (
                record.name + ' [' + record.city + ']'
            );
          },
        },
        {
          title: 'Competições',
          dataIndex: 'competitions',
          key: 'competitions[0].name',
          render: (competitions: any[]) => (
            <>
              {competitions.map(competition => {
                return (
                  <Tag color={'blue'} key={competition.name}>
                    {competition.name.toUpperCase() + ' [' + competition.season + ']'}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: '',
          dataIndex: '',
          render: (record: { id: any }) => (
            <Space key={record.id} size="middle">
              <Popconfirm
                title={'Deseja deleter essa atleta?'}
                onConfirm={() => deleteOneAthlete(record.id)}
              >
                <Tooltip title={'Deletar'}>
                  <DeleteFilled />
                </Tooltip>
              </Popconfirm>
              <Tooltip title={'Editar'}>
                <EditFilled onClick={() => (setSelectedAthlete(record.id), setVisibleUpdate(true))} />
              </Tooltip>
              <Tooltip title={'Vincular Competições'}>
                <FolderAddFilled onClick={() => (setSelectedAthlete(record.id), setVisibleToCompetitions(true))} />
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
        setVisibleToCompetitions(false);
        setSelectedAthlete(null);
    }


    return(
        <>
          <AdminMenu />
          <AdminDefaultButton onClick={() => setVisibleCreate(true)}>Novo Atleta</AdminDefaultButton>
          <Table columns={columns} dataSource={tableData} />

          <Drawer
            title="Novo Atleta"
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
            <AdminAthleteCreateForm createAthlete={createAthlete} setVisible={setVisibleCreate} />
          </Drawer>
          
          {(visibleUpdate && selectedAthleteData?.id === selectedAthlete) && (
            <Drawer
              title="Editar Atleta"
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
              <AdminAthleteUpdateForm updateAthlete={updateOneAthlete} setVisible={setVisibleUpdate} selectedAthleteData={selectedAthleteData} />
            </Drawer>
          )}
          
          {selectedAthleteData && (
            <Drawer
              title={`Atleta: "${selectedAthleteData.firstname}"`}
              width={300}
              onClose={closeModal}
              destroyOnClose={true}
              visible={visibleToCompetitions}
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
              <AdminAthletesToCompetitions addCompetitionsToAthlete={addCompetitionsToAthlete} setVisible={setVisibleToCompetitions} selectedAthleteData={selectedAthleteData} />
            </Drawer>
          )}
        </>
    );
}