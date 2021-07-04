import { Divider, Select } from 'antd';
import React, { useCallback, useEffect } from 'react';
import InputText from '../../atoms/InputText';
import Logo from '../../atoms/Logo';
import InputSelect from '../../molecules/InputSelect';
import HeaderSeason from '../HeaderSeason';
import './styles.css';

type Props = {
    categoriesArray?: any;
    selectedCategory?: string;
    setSelectedCategory?: any;
    showCategories?: boolean;
}

export default function HeaderRanking({
    categoriesArray,
    selectedCategory,
    setSelectedCategory,
    showCategories = true,
}: Props) {
    const headerProps = {
        margin: 0,
        padding: '0 10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        minHeight: '120px',
        borderBottom: 'solid white 2px',
    }
    
    const categoriesList = categoriesArray?.map((category: {name: string, id: string}) => ({
        label: category.name,
        value: category.id,
    }));

    useEffect(() => {
        setSelectedCategory(categoriesList?.[0].value);
    }, [])
    

    function handleCategory(value: any) {
        setSelectedCategory(value);
    }

    return(
        <div id='headerRanking' style={headerProps}>
            <Logo />
            {showCategories ? (
                <Select
                    style={{width: '200px'}}
                    options={categoriesList}
                    allowClear={true}
                    placeholder="Selecione"
                    value={selectedCategory}
                    onChange={handleCategory}
                />
            ) : 
                <div style={{width: '200px'}}></div>
            }
        </div>
    );
}