import { Table, Tag, Space, Drawer, Button, Popconfirm, Tooltip  } from 'antd';
import { useEffect, useState } from 'react';
import AdminBoxCreateForm from './AdminBoxCreateForm';
import AdminBoxUpdateForm from './AdminBoxUpdateForm';
import AdminMenu from '../../organisms/AdminMenu';
import AdminDefaultButton from '../../molecules/AdminCreateButton';
import { DeleteFilled, EditFilled } from '@ant-design/icons';


type Props = {
  tableData?: any;
  createBox?: any;
  deleteOneBox?: any;
  selectedBox?: any;
  setSelectedBox?: any;
  selectedBoxData?: any;
  updateOneBox?: any;
}



export default function AdminBoxTemplate({
  tableData, createBox, deleteOneBox, selectedBox, setSelectedBox, selectedBoxData, updateOneBox
}: Props) {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const columns = [
    {
      title: 'Nome',
      dataIndex: '',
      render: (record: {name: any, logo: any}) =>
        <>
          <div style={{display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center'}}>
            <img src={record.logo} width={'70px'} />
            <a>{record.name}</a>
          </div>
        </>
    },
    {
      title: 'Cidade',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Total de Atletas',
      dataIndex: 'athletesAggregate',
      key: 'athletesAggregate',
      render: (athletesAggregate: any) => <a>{athletesAggregate.count.firstname}</a>
    },
    {
      title: 'Atletas',
      key: 'athlete[0].lastname',
      dataIndex: 'athletes',
      render: (athletes: any[]) => (
        <>
          {athletes.map(athlete => {
            let color = athlete.length > 5 ? 'geekblue' : 'green';
            if (athlete.category.name === ('RX/M' || 'RX/F')) {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={athlete.lastname}>
                {athlete.lastname.toUpperCase()}
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
            title={'Deseja deleter esse box?'}
            onConfirm={() => deleteOneBox(record.id)}
          >
            <Tooltip title={'Deletar'}>
              <DeleteFilled />
            </Tooltip>
          </Popconfirm>
          <Tooltip title={'Editar'}>
            <EditFilled onClick={() => (setVisibleUpdate(true), setSelectedBox(record.id))} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const closeModal = () => {
    setSelectedBox(null)
    setVisibleCreate(false)
    setVisibleUpdate(false);
  }

    return (
        <>
          <AdminMenu />
          <AdminDefaultButton onClick={() => setVisibleCreate(true)}>Novo Box</AdminDefaultButton>
          <Table columns={columns} dataSource={tableData} />

          <Drawer
            title="Novo Box"
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
            <AdminBoxCreateForm createBox={createBox} setVisible={setVisibleCreate} />
        </Drawer>
        {visibleUpdate && (selectedBoxData?.id === selectedBox) && (
          <Drawer
            title="Editar Box"
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
            <AdminBoxUpdateForm updateOneBox={updateOneBox} setVisible={setVisibleUpdate} selectedBoxData={selectedBoxData} />
          </Drawer>
        )}
      </>
    );
}