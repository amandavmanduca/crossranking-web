import React from 'react';
import MainTitle from '../../atoms/MainTitle';
import SideButton from '../../atoms/SideButton';

type Props = {
    seasonYear?: any;
    setSeasonYear?: any;
}

export default function HeaderSeason({
    seasonYear,
    setSeasonYear,
}: Props) {
    const headerProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        minHeight: '70px',
        borderBottom: 'solid white 2px',
    }
    return (
        <div style={headerProps}>
            {seasonYear !== null ? 
                <SideButton
                    side={'left'}
                    size={20}
                    onClick={() => setSeasonYear(seasonYear-1)}
                />
            : null}
            <MainTitle mainTitle={`CrossRanking ${seasonYear ? seasonYear : ''}`} />
            {seasonYear !== null ? 
                <SideButton
                    side={'right'}
                    size={20}
                    onClick={() => setSeasonYear(seasonYear+1)}
                />
            : null}
        </div>
    );
}