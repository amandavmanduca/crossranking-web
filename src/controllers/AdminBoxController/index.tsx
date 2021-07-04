import { parseCookies } from 'nookies';
import React, { useState } from 'react';
import AdminBoxTemplate from '../../components/templates/AdminBoxTemplate';
import useCreateOneBox from './hooks/useCreateOneBox';
import useDeleteOneBox from './hooks/useDeleteOneBox';
import useGetBoxById from './hooks/useGetBoxById';
import useListBoxes from './hooks/useListBoxes';
import useUpdateOneBox from './hooks/useUpdateOneBox';


export default function AdminBoxContainer() {

    const [selectedBox, setSelectedBox] = useState('');

    const { data } = useListBoxes();
    const { createBox } = useCreateOneBox();
    const { deleteOneBox } = useDeleteOneBox();
    const { data: selectedBoxData } = useGetBoxById(selectedBox);
    const { updateOneBox } = useUpdateOneBox();

    return (
        <>
            <AdminBoxTemplate
                tableData={data?.boxes}
                createBox={createBox}
                deleteOneBox={deleteOneBox}
                selectedBox={selectedBox}
                setSelectedBox={setSelectedBox}
                selectedBoxData={selectedBoxData?.box}
                updateOneBox={updateOneBox}
            />
        </>
    );
}