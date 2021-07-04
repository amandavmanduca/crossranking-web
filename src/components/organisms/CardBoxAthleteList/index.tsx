import React from 'react';
import Title from '../../atoms/Title';
import './styles.css';
import { StyledAthleteList } from './styles';
import { Empty } from 'antd';

interface Props {
    athleteList?: any;
}

export default function CardBoxAthleteList({athleteList}: Props) {
    const cardAthleteProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        // boxShadow: 'inset 0 0 2px rgba(68, 68, 68, 0.2)',
        display: 'grid',
    }
    const tableRankingProps = {
        width: '100%',
        // boxShadow: 'inset 0 0 10px rgba(68, 68, 68, 0.2)',
    }
    return(
        <div id="TableAthletesList" style={cardAthleteProps}>
            <div style={{padding: 15}}>
                {athleteList?.length === 0 ?
                    <Empty description={'Nenhum Atleta Registrado'} />
                :    
                    <StyledAthleteList>
                    {/* <table style={tableRankingProps}> */}
                        <tbody>
                            <tr>
                                <th><Title title='Atleta'/></th>
                                <th><Title title='Categoria'/></th>
                            </tr>
                            {athleteList?.map((athlete: any) => (
                                <tr key={athlete.id}>
                                    <td><Title title={athlete.firstname + ' ' + athlete.lastname} /></td>
                                    <td><Title title={athlete.category.name} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </StyledAthleteList>
                }
            </div>
        </div>
    );
}

// const athleteList = [
//     {
//         rank: '1',
//         name: 'Texugo',
//         category: 'RX',
//         points: '350',
//     }
// ]