import { PropsWithChildren } from 'react';
import { useState } from 'react';
import CategoriesArray from '../../../common/hooks/selectCategories/CategoriesArray';
import HeaderRanking from '../../../components/organisms/HeaderRanking';
import HeaderSeason from '../../../components/organisms/HeaderSeason';
import Menu from '../../../components/organisms/Menu';

type Props = {
    seasonYear?: number;
    setSeasonYear?: any;
    categoriesArray?: any;
    selectedCategory?: any;
    setSelectedCategory?: any;
    showCategories?: boolean;
}

export default function CrossRankingTemplate({
    children,
    seasonYear,
    setSeasonYear,
    selectedCategory,
    categoriesArray,
    setSelectedCategory,
    showCategories
}: PropsWithChildren<Props>) {

    return (
        <>
            <HeaderSeason
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
            />
            <HeaderRanking
                categoriesArray={categoriesArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                showCategories={showCategories}
            />
            <Menu />
            <div>
                {children}
            </div>
        </>
    )
}