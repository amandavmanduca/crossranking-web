import React, { useEffect, useState } from 'react';
import Title from '../../atoms/Title';
import './styles.css'
import Image from '../../atoms/Image';
import SideButton from '../../atoms/SideButton';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Empty } from 'antd';

type Props = {
    leaderboardData?: any;
    competitionsList?: any;
}

export default function TableRanking({
    leaderboardData,
    competitionsList
}: Props) {

    const [table, setTable] = useState(true);
    const [showCompetitions, setShowCompetitions] = useState(false);
    const [selectedAthlete, setSelectedAthlete] = useState<any>([]);

    const pageProps = {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    }

    const tableRankingProps = {
        width: '100%',
        // overflow: 'hidden',
        // boxShadow: 'inset 0 0 10px rgba(68, 68, 68, 0.2)',
    }

    const boxColumn = {
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        gap: '5px',
    }


    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    function handleSelectedAthlete(id: any) {
        if(selectedAthlete.indexOf(id) == -1) {
            setSelectedAthlete((selectedAthlete: any) => [...selectedAthlete , id]);
        } else {
            var array = [...selectedAthlete];
            var index = array.indexOf(id)
            if (index !== -1) {
              array.splice(index, 1);
              setSelectedAthlete(array);
            }
        }
        
    }
    

    return(
        <> 
            {/* <div
                style={{position: 'fixed', top: '80%', right: '10px', zIndex: 100}}
                onClick={() => table ? setTable(false) : setTable(true)}
            >
                <SideButton side={table ? 'right' : 'left'} />
            </div> */}
            <div id="TableRanking" style={pageProps}>
                {table ? (
                    <table style={tableRankingProps}>
                        <tbody>
                        <tr>
                            <th style={{padding: 5}}><Title title='Rank'/></th>
                            <th style={{padding: 5}}><Title title='Atleta'/></th>
                            <th style={{padding: 5}}><Title title='Box'/></th>
                        </tr>
                        {leaderboardData?.length > 0 ? (
                        leaderboardData?.slice().sort((a: any, b: any) => a.competitionRanksAggregate?.sum?.points < b.competitionRanksAggregate?.sum?.points ? 1 : -1)?.map((list: any, index: any) => (
                            <>
                                <tr key={index} style={{cursor: 'pointer'}} onClick={() => handleSelectedAthlete(list.id)}>
                                    <td><Title title={(index+1) + 'º (' + Number(list.competitionRanksAggregate?.sum.points) + ')'} /></td>
                                    <td>
                                        <div>
                                            <Title title={list.firstname + ' ' + list.lastname} />
                                            <Title title={list.firstname + ' ' + list.lastname} />
                                        </div>
                                    </td>
                                    <td>
                                        <div style={boxColumn}>
                                            <Image
                                                image={list.box?.logo}
                                                width='35px'
                                                title={list.box?.name}
                                            />
                                            <Title title={list.box?.name} />
                                        </div>
                                    </td>
                                </tr>
                                {selectedAthlete.indexOf(list.id) !== -1 ? 
                                    list.competitionRanks?.map((competition: any, index: number) => (
                                    <tr key={competition.id}>
                                        <td
                                            style={{
                                                height: '20px',
                                                backgroundColor: index % 2 == 0 ? '' : '#f7f7f8',
                                                // textAlign: 'left',
                                                padding: '5px 15px',
                                            }}
                                            colSpan={3}
                                        >
                                            <Title
                                                fontWeight={400}
                                                title={
                                                    competition.competition.name
                                                    + ': '
                                                    + competition.rank
                                                    + 'º ('
                                                    + competition.points
                                                    + ')'
                                                }
                                            />
                                        </td>
                                    </tr>
                                    ))
                                : null}
                            </>
                            ))) : 
                               <tr>
                                   <td colSpan={3}><Empty description={'Nenhum registro encontrado'} /></td>
                               </tr>
                            }
                            </tbody>
                    </table>
                ) : (
                    <table style={tableRankingProps}>
                        <tbody>
                        <tr>
                        <th>
                            <div style={{transform: 'rotate(-30deg)'}}>
                                    <Title title='Atleta'/>
                                </div>
                            </th>
                            {competitionsList?.map((competition: any) => (
                                <th key={competition.id}>
                                    <div style={{transform: 'rotate(-30deg)'}}>
                                        <Title title={competition.name}/>
                                    </div>
                                </th>
                            ))}
                        </tr>

                        {leaderboardData?.slice().sort((a: any, b: any) => a.competitionRanksAggregate?.sum?.points < b.competitionRanksAggregate?.sum?.points ? 1 : -1)?.map((list: any, index: any) => (
                            <tr key={list.id}>
                                <td>
                                    <div>
                                        <Title title={list.firstname} />
                                        <Title title={list.lastname} />
                                    </div>
                                </td>                                                                
                                {list.competitionRanks?.map((ranks: any) => (
                                    <td><Title title={ranks.rank + 'º (' + ranks.points + ')'}></Title></td>
                                ))}
                            </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}