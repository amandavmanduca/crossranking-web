import { useState } from "react";
import { Table, Tag, Space, Drawer, Button, Popconfirm, Tooltip } from 'antd';
import AdminAdminCreateForm from '../AdminAdminsTemplate/AdminAdminCreateForm';
import AdminAdminUpdateForm from '../AdminAdminsTemplate/AdminAdminUpdateForm';
import AdminMenu from '../../organisms/AdminMenu';
import AdminDefaultButton from '../../molecules/AdminCreateButton';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

type Props = {
  tableData?: any;
  createAdmin?: any;
  deleteOneAdmin?: any;
  selectedAdmin?: any;
  setSelectedAdmin?: any;
  selectedAdminData?: any;
  updateOneAdmin?: any;
}

export default function AdminAdminsTemplate({
  createAdmin,
  tableData,
  selectedAdminData,
  selectedAdmin,
  setSelectedAdmin,
  updateOneAdmin,
}: Props) {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '',
      dataIndex: '',
      render: (record: { id: any }) => (
        <Space key={record.id} size="middle">

          {/* <Popconfirm
            title={'Deseja deleter esse box?'}
            onConfirm={() => deleteOneAdmin(record.id)}
          >
            <Tooltip title={'Deletar'}>
              <DeleteFilled />
            </Tooltip>
          </Popconfirm> */}
          <Tooltip title={'Editar'}>
            <EditFilled onClick={() => (setSelectedAdmin(record.id), setVisibleUpdate(true))} />
          </Tooltip>
        </Space>

      ),
    },
];


    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);


    const closeModal = () => {
        setVisibleCreate(false);
        setVisibleUpdate(false);
        setSelectedAdmin(null);
    }
    

    return(
      
        <>
          <AdminMenu />
          <AdminDefaultButton onClick={() => setVisibleCreate(true)}>Novo Admin</AdminDefaultButton>
          <Table columns={columns} dataSource={tableData} />
            
          <Drawer
            title="Novo Admin"
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
            <AdminAdminCreateForm createAdmin={createAdmin} setVisible={setVisibleCreate} />
          </Drawer>

          {(visibleUpdate && selectedAdminData?.id === selectedAdmin) && (
            <Drawer
              title="Editar Admin"
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
              <AdminAdminUpdateForm updateAdmin={updateOneAdmin} setVisible={setVisibleUpdate} selectedAdminData={selectedAdminData} />
            </Drawer>
          )}
        </>
    );
}