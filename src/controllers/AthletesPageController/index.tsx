import useListAthletes from "./hooks/useListAthletes";
import Athlete from '../../pages/Athlete/index';
import { useState } from "react";
import CategoriesArray from "../../common/hooks/selectCategories/CategoriesArray";

export default function AthletesPageController() {
    const [seasonYear, setSeasonYear] = useState(2020);
    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: categoriesArray } = CategoriesArray();
    
    const { data: athleteList } = useListAthletes(selectedCategory, seasonYear);
    return(
        <>
            <Athlete
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
                categoriesArray={categoriesArray?.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                athleteList={athleteList?.athletes}
            
            />
        </>
    );
}