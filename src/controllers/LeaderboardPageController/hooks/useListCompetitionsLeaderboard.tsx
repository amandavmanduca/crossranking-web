import { Input } from "antd"
import { useEffect } from "react";
import { useListCompetitionsLeaderboardLazyQuery, useListCompetitionsLeaderboardQuery } from "../../../generated/graphql"


export default function useListCompetitionsLeaderboard(categoryId: string, season: number) {
    const [fetch, { data, loading, refetch }] = useListCompetitionsLeaderboardLazyQuery({
        variables: {
            filter: {
                category: {id: {eq: categoryId}},
                competitions: {season: {eq: season}}
            }
        },
        fetchPolicy: 'network-only',
    });
    
    useEffect(() => {
    if (categoryId && season) {
        fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId, season]);

    return {
        data
    }
}