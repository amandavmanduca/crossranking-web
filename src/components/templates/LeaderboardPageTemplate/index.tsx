import React from 'react';
import HeaderRanking from '../../../components/organisms/HeaderRanking';
import HeaderSeason from '../../../components/organisms/HeaderSeason';
import Menu from '../../../components/organisms/Menu';
import MenuCompetitions from '../../../components/organisms/MenuCompetitions';
import TableRanking from '../../../components/organisms/TableRanking';
import Teste from '../../../components/atoms/Teste';
import CrossRankingTemplate from '../../../components/templates/CrossRankingTemplate';
import CrossRankingController from '../../../controllers/CrossRankingController';

type Props = {
    categoriesArray?: any;
    selectedCategory?: any;
    setSelectedCategory?: any;
    leaderboardData?: any;
    competitionsList?: any;
    seasonYear?: any;
    setSeasonYear?: any;
}

export default function LeaderboardPageTemplate({
    categoriesArray,
    selectedCategory,
    setSelectedCategory,
    leaderboardData,
    competitionsList,
    seasonYear,
    setSeasonYear,
}: Props) {
    const pageProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'inline-block',
    }


    return(
        <div style={pageProps}>

            <CrossRankingTemplate
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
                selectedCategory={selectedCategory}
                categoriesArray={categoriesArray}
                setSelectedCategory={setSelectedCategory}
            >
                <TableRanking
                    leaderboardData={leaderboardData}
                    competitionsList={competitionsList}
                />
            </CrossRankingTemplate>
        </div>
    );
}