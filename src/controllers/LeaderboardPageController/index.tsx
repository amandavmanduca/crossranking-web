import { useState } from "react";
import LeaderboardPageTemplate from '../../components/templates/LeaderboardPageTemplate';
import CategoriesArray from "../../common/hooks/selectCategories/CategoriesArray";
import useListCompetitionsLeaderboard from "./hooks/useListCompetitionsLeaderboard";
import FilteredCompetitionsBySeason from "../../common/hooks/selectFilteredCompetitionsBySeason/FilteredCompetitionsBySeason";

type Props = {
    seasonYear?: any;
    selectedCategory?: any;
}

export default function LeaderboardPageController({
    // seasonYear,
    // selectedCategory,
}: Props) {
    const [seasonYear, setSeasonYear] = useState(2020);
    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: categoriesArray } = CategoriesArray();

    const { data: leaderboardData } = useListCompetitionsLeaderboard(selectedCategory, seasonYear);

    const { data: competitionsList } = FilteredCompetitionsBySeason(seasonYear);

    
    return(
        <>
            <LeaderboardPageTemplate
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
                categoriesArray={categoriesArray?.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                competitionsList={competitionsList?.competitions}
                leaderboardData={leaderboardData?.athletes}
            />
        </>
    )
}