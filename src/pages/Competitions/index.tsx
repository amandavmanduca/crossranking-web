import TableCompetitions from '../../components/organisms/TableCompetitions';
import CrossRankingTemplate from '../../components/templates/CrossRankingTemplate';

type Props = {
    categoriesArray?: any;
    selectedCategory?: any;
    setSelectedCategory?: any;
    seasonYear?: any;
    setSeasonYear?: any;
    competitionsBySeason?: any;
    selectedCompetition?: any;
    setSelectedCompetition?: any;
    selectedCompetitionData?: any;
}

export default function Competitions({
    categoriesArray,
    selectedCategory,
    setSelectedCategory,
    seasonYear,
    setSeasonYear,
    competitionsBySeason,
    selectedCompetition,
    setSelectedCompetition,
    selectedCompetitionData,
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
                <TableCompetitions
                    competitionsBySeason={competitionsBySeason}
                    selectedCompetition={selectedCompetition}
                    setSelectedCompetition={setSelectedCompetition}
                    selectedCompetitionData={selectedCompetitionData}
                />
            </CrossRankingTemplate>
        </div>
    );
}