import { useState } from "react";
import CategoriesArray from "../../common/hooks/selectCategories/CategoriesArray";
import Competitions from "../../pages/Competitions";
import useGetCompetitionById from "./hooks/useGetCompetitionById";
import useListCompetitionsBySeason from "./hooks/useListCompetitionsBySeason";


export default function CompetitionsPageController() {
    const [seasonYear, setSeasonYear] = useState(2020);
    const [selectedCategory, setSelectedCategory] = useState('');
    

    const { data: categoriesArray } = CategoriesArray();

    const { data: competitionsBySeason } = useListCompetitionsBySeason(seasonYear);

    const [selectedCompetition, setSelectedCompetition] = useState('');

    const { data: selectedCompetitionData } = useGetCompetitionById(selectedCategory, selectedCompetition);
    


    return(
        <>
            <Competitions
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
                categoriesArray={categoriesArray?.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                competitionsBySeason={competitionsBySeason?.competitions}
                selectedCompetition={selectedCompetition}
                setSelectedCompetition={setSelectedCompetition}
                selectedCompetitionData={selectedCompetitionData?.competitionRanks}
            />
        </>
    )
}