import { useEffect } from "react";
import { useListAtletesLazyQuery } from "../../../generated/graphql";


export default function useListAthletes(categodyId: any, season: any) {
    const [fetch, { data, loading, refetch }] = useListAtletesLazyQuery({
      variables: {
        filter: {
          category: {id: {eq: categodyId}},
          competitions: {season: {eq: season}}
        }
      },
      fetchPolicy: 'network-only',
    });
  
    useEffect(() => {
      if (categodyId && season) {
        fetch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categodyId, season]);
  
    return {
      data,
      refetch,
      loading,
    };
  }
  