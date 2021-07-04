import { Input } from "antd"
import { useEffect } from "react";
import { useListCompetitionsBySeasonLazyQuery, useListCompetitionsLeaderboardLazyQuery, useListCompetitionsLeaderboardQuery } from "../../../generated/graphql"


export default function useListCompetitionsBySeason(season: number) {
    const [fetch, { data, loading, refetch }] = useListCompetitionsBySeasonLazyQuery({
        variables: {
            filter: {
                season: {eq: season}
            }
        },
        fetchPolicy: 'network-only',
    });
    
    useEffect(() => {
    if (season) {
        fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [season]);

    return {
        data
    }
}