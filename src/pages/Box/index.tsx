import React, { useState } from 'react';
import CardBox from '../../components/organisms/CardBox';
import CardBoxAthleteList from '../../components/organisms/CardBoxAthleteList';
import HeaderRanking from '../../components/organisms/HeaderRanking';
import HeaderSeason from '../../components/organisms/HeaderSeason';
import Menu from '../../components/organisms/Menu';
import CrossRankingTemplate from '../../components/templates/CrossRankingTemplate';

interface Props {
    boxList?: any;
    categoriesArray?: any;
    selectedCategory?: any;
    setSelectedCategory?: any;
    seasonYear?: any;
    setSeasonYear?: any;
}

export default function Box({
    boxList,
    categoriesArray,
    selectedCategory,
    setSelectedCategory,
    seasonYear,
    setSeasonYear,
}: Props) {
    const [selectedBox, setSelectedBox] = useState(null);
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
    function handleSelectedBox(id: any) {
        if(id === selectedBox) {
            setSelectedBox(null)
        } else {
            setSelectedBox(id)
        }
    }
    return(
        <div style={pageProps}>
            <CrossRankingTemplate
                seasonYear={seasonYear}
                setSeasonYear={setSeasonYear}
                selectedCategory={selectedCategory}
                categoriesArray={categoriesArray}
                setSelectedCategory={setSelectedCategory}
                showCategories={false}
            >
                <div style={boxProps}>
                    {boxList?.map((box: any) => (
                        <span key={box.id}>
                                <CardBox
                                    boxName={box.name}
                                    boxLogo={box.logo}
                                    logoWidth={'70px'}
                                    totalAthletes={box.athletesAggregate.count.id}
                                    totalRX={box.athletes.filter((athlete: any) => athlete.category.name.includes('RX')).map((athlete: any) => athlete).length}
                                    totalAmador={box.athletes.filter((athlete: any) => athlete.category.name.includes('Amador')).map((athlete: any) => athlete).length}
                                    totalScale={box.athletes.filter((athlete: any) => athlete.category.name.includes('Scale')).map((athlete: any) => athlete).length}
                                    boxCity={box.city}
                                    onClick={() => handleSelectedBox(box.id)}
                                />
                                {box.id.includes(selectedBox) &&
                                    <CardBoxAthleteList athleteList={box?.athletes} />
                                }
                        </span>
                    ))}
                </div>
            </CrossRankingTemplate>
        </div>
    );
}