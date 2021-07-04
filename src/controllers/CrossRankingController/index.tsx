import { useState } from "react";
import CategoriesArray from "../../common/hooks/selectCategories/CategoriesArray";
import CrossRankingTemplate from '../../components/templates/CrossRankingTemplate';



export default function CrossRankingController() {
    const [seasonYear, setSeasonYear] = useState(2020);
    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: categoriesArray } = CategoriesArray();

    return(
        <>
        </>
    )
}