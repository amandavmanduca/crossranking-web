import { useState } from "react";
import useCreateOneCompetition from "./hooks/useCreateOneCompetition";
import AdminCompetitionsTemplate from '../../components/templates/AdminCompetitionsTemplate';
import useListCompetitions from "./hooks/useListCompetitions";
import useDeleteOneCompetition from "./hooks/useDeleteOneCompetition";
import useGetCompetitionByIdAdmin from "./hooks/useGetCompetitionByIdAdmin";
import useUpdateOneCompetition from "./hooks/useUpdateOneCompetition";


export default function AdminCompetitionsController() {

    const [selectedCompetition, setSelectedCompetition] = useState('');
    
    const { data } = useListCompetitions()
    const { createCompetition } = useCreateOneCompetition();
    
    const { deleteOneCompetition } = useDeleteOneCompetition();
    const { data: selectedCompetitionData } = useGetCompetitionByIdAdmin(selectedCompetition);
    const { updateOneCompetition } = useUpdateOneCompetition();
    
    return(
        <AdminCompetitionsTemplate
            tableData={data?.competitions}
            createCompetition={createCompetition}
            deleteOneCompetition={deleteOneCompetition}
            selectedCompetition={selectedCompetition}
            setSelectedCompetition={setSelectedCompetition}
            selectedCompetitionData={selectedCompetitionData?.competition}
            updateOneCompetition={updateOneCompetition}
        //     addCompetitionsToAthlete={addCompetitionsToAthlete}
        />
    )
}