import { useState } from 'react';
import AdminAdminsTemplate from '../../components/templates/AdminAdminsTemplate';
import useCreateOneAdmin from './hooks/useCreateOneAdmin';
import useGetAdminById from './hooks/useGetAdminById';
import useListAdmins from './hooks/useListAdmins';
import useUpdateOneAdmin from './hooks/useUpdateOneAdmin';

export default function AdminAdminsController() {
    const [selectedAdmin, setSelectedAdmin] = useState('');
    const { createOneAdmin } = useCreateOneAdmin();
    const { data } = useListAdmins();

    const { data: selectedAdminData } = useGetAdminById(selectedAdmin);
    const { updateOneAdmin } = useUpdateOneAdmin();


    return(
        <>
            <AdminAdminsTemplate
                createAdmin={createOneAdmin}
                tableData={data?.admins}
                selectedAdmin={selectedAdmin}
                setSelectedAdmin={setSelectedAdmin}
                selectedAdminData={selectedAdminData?.admin}
                updateOneAdmin={updateOneAdmin}
            />
        </>
    );
}