import { useState } from 'react';
import CategoriesArray from '../../common/hooks/selectCategories/CategoriesArray';
import Box from '../../pages/Box/index';
import useListAllBoxes from './hooks/useListAllBoxes';

export default function BoxPageController() {
    const [seasonYear, setSeasonYear] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data: categoriesArray } = CategoriesArray();
    const { data } = useListAllBoxes();
    return(
        <>
            <Box
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
                categoriesArray={categoriesArray?.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                boxList={data?.boxes}
            />
        </>
    );
}