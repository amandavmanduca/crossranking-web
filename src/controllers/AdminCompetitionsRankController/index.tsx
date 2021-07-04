import { useState } from 'react';
import AdminCompetitionsRankTemplate from '../../components/templates/AdminCompetitionsRankTemplate';
import useCreateOneCompetition from '../AdminCompetitionsController/hooks/useCreateOneCompetition';
import useCreateOneCompetitionRank from './hooks/useCreateOneCompetitionRank';
import useListFilteredAthletes from './hooks/useListFilteredAthletes';
import useUpdateOneCompetitionRank from './hooks/useUpdateOneCompetitionRank';

export default function AdminCompetitionsRankController() {
    const [selectedCompetition, setSelectedCompetition] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showAthletes, setShowAthletes] = useState(false);

    const { createCompetition } = useCreateOneCompetition();
    const { data: filteredAthletesList } = useListFilteredAthletes(selectedCompetition, selectedCategory);

    const { createAthleteRank } = useCreateOneCompetitionRank();
    const { updateAthleteRank } = useUpdateOneCompetitionRank();

    return (
        <>
            <AdminCompetitionsRankTemplate
                createCompetition={createCompetition}
                selectedCompetition={selectedCompetition}
                setSelectedCompetition={setSelectedCompetition}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                showAthletes={showAthletes}
                setShowAthletes={setShowAthletes}
                filteredAthletesList={filteredAthletesList}
                createAthleteRank={createAthleteRank}
                updateAthleteRank={updateAthleteRank}
            />
        </>
    );
}