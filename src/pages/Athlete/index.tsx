import React from 'react';
import CardAthlete from '../../components/organisms/CardAthlete';
import HeaderRanking from '../../components/organisms/HeaderRanking';
import HeaderSeason from '../../components/organisms/HeaderSeason';
import Menu from '../../components/organisms/Menu';
import CrossRankingTemplate from '../../components/templates/CrossRankingTemplate';
import { Empty } from 'antd';
interface Props {
    athleteList?: any;
    categoriesArray?: any;
    selectedCategory?: any;
    setSelectedCategory?: any;
    leaderboardData?: any;
    competitionsList?: any;
    seasonYear?: any;
    setSeasonYear?: any;
}

export default function Athlete({
    athleteList,
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
    const boxProps = {
        margin: 0,
        padding: 0,
        display: 'grid',
        gridGap: '20px',
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
                <div style={boxProps}>
                    {athleteList?.length > 0 ? (
                    athleteList?.map((athlete: any) => (
                        <span key={athlete.id}>
                            <CardAthlete
                                key={athlete.id}
                                boxName={athlete.box.name}
                                boxLogo={athlete.box.logo}
                                logoWidth={'40px'}
                                boxCity={athlete.box.city}
                                competitions={athlete.competitions}
                                nickname={athlete.lastname}
                                fullName={athlete.firstname}
                                category={athlete.category.name}
                            />
                        </span>
                    ))) : <Empty description={'Nenhum atleta encontrado'} />}
                </div>
            </CrossRankingTemplate>
        </div>
    );
}