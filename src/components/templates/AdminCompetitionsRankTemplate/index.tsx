import { Table, Tag, Space, Drawer, Button, Select } from 'antd';
import { useEffect, useState } from 'react';
import CategoriesArray from '../../../common/hooks/selectCategories/CategoriesArray';
import CompetitionsArray from '../../../common/hooks/selectCompetitions/CompetitionsArray';
import FilteredCategoriesByCompetitionArray from '../../../common/hooks/selectFilteredCategoriesByCompetition/FilteredCategoriesByCompetitionArray';
import AdminMenu from '../../organisms/AdminMenu';
import AdminCompetitionCreateForm from '../AdminCompetitionsTemplate/AdminCompetitionCreateForm';
import AdminCompetitionCreateRank from './AdminCompetitionCreateRank';
import AdminDefaultButton from '../../molecules/AdminCreateButton';
import { Empty } from 'antd';

type Props = {
    createCompetition?: any;
    selectedCompetition?: any;
    setSelectedCompetition?: any;
    selectedCategory?: any;
    setSelectedCategory?: any
    showAthletes?: any;
    setShowAthletes?: any;
    filteredAthletesList?: any;
    createAthleteRank?: any;
    updateAthleteRank?: any;
}

export default function AdminCompetitionsRankTemplate({
    createCompetition,
    selectedCompetition,
    setSelectedCompetition,
    selectedCategory,
    setSelectedCategory,
    showAthletes,
    setShowAthletes,
    filteredAthletesList,
    createAthleteRank,
    updateAthleteRank,
}: Props) {

    const { data: competitionsList } = CompetitionsArray();
    const { data: categoriesList } = CategoriesArray();

    const competitionsArray = competitionsList?.competitions.map((competition) => ({
        label: '[' + competition.season + '] ' + competition.name,
        value: competition.id,
    }));

    const categoriesArray = categoriesList?.categories.map((category) => ({
        label: category.name,
        value: category.id,
    }));

    function handleSelectedCompetition(value: any) {
        setSelectedCompetition(value.key);
    }

    function handleSelectedCategory(value: any) {
        setSelectedCategory(value.key);
    }


    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);

    const closeModal = () => {
        // setSelectedBox(null)
        setVisibleCreate(false)
        setVisibleUpdate(false);
      }


    function handleList() {
        setShowAthletes(!showAthletes);
    }
    
    return(
        <>
            <AdminMenu />
            {/* <AdminDefaultButton onClick={() => setVisibleCreate(true)}>Nova Competição</AdminDefaultButton> */}
            <AdminDefaultButton onClick={() => handleList()}>Ver Lista</AdminDefaultButton>
            <Select
                style={{width: '300px'}}
                labelInValue
                options={competitionsArray}
                allowClear={true}
                placeholder="Competição"
                onChange={handleSelectedCompetition}
            />
            <Select
                style={{width: '300px'}}
                labelInValue
                options={categoriesArray}
                allowClear={true}
                placeholder="Categoria"
                onChange={handleSelectedCategory}
            />
            {/* <Drawer
                title="Nova Competição"
                width={300}
                onClose={closeModal}
                destroyOnClose={true}
                visible={visibleCreate}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                <div
                    style={{
                    textAlign: 'right',
                    }}
                >
                    <Button onClick={closeModal} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                </div>
                }
            >
                <AdminCompetitionCreateForm createCompetition={createCompetition} setVisible={setVisibleCreate} />
            </Drawer> */}
            {showAthletes && (
            (selectedCompetition && selectedCategory) && (
                filteredAthletesList?.athletes.length > 0 ?            

                filteredAthletesList?.athletes.map((athlete: any) => (
                    <AdminCompetitionCreateRank
                        createAthleteRank={createAthleteRank}
                        updateAthleteRank={updateAthleteRank}
                        athlete={athlete}
                        totalAthletes={filteredAthletesList?.athletes.length}
                        selectedCategory={selectedCategory}
                        selectedCompetition={selectedCompetition}
                    />
                )) : <Empty description={'Não há dados'} />
            ))}



            
        </>
    )
}