import { useState } from "react";
import AdminAthletesTemplate from "../../components/templates/AdminAthletesTemplate/index";
import useAddCompetitionsToAthlete from "./hooks/useAddCompetitionsToAthlete";
import useCreateOneAthlete from "./hooks/useCreateOneAthlete";
import useDeleteOneAthlete from "./hooks/useDeleteOneAthlete";
import useGetAthleteById from "./hooks/useGetAthleteById";
import useListAthletesAdmin from "./hooks/useListAthletesAdmin";
import useUpdateOneAthlete from "./hooks/useUpdateOneAthlete";


export default function AdminAthletesController() {
    const [selectedAthlete, setSelectedAthlete] = useState('');

    const { data } = useListAthletesAdmin();
    const { createOneAthlete } = useCreateOneAthlete();
    const { deleteOneAthlete } = useDeleteOneAthlete();
    const { data: selectedAthleteData } = useGetAthleteById(selectedAthlete);
    const { updateOneAthlete } = useUpdateOneAthlete();
    const { addCompetitionsToAthlete } = useAddCompetitionsToAthlete();

    return(
        <>
            <AdminAthletesTemplate
                tableData={data?.athletes}
                createAthlete={createOneAthlete}
                deleteOneAthlete={deleteOneAthlete}
                selectedAthlete={selectedAthlete}
                setSelectedAthlete={setSelectedAthlete}
                selectedAthleteData={selectedAthleteData?.athlete}
                updateOneAthlete={updateOneAthlete}
                addCompetitionsToAthlete={addCompetitionsToAthlete}
            />
        </>
    );
}