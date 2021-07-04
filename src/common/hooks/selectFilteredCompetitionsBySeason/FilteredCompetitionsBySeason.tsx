
import { useEffect } from "react";
import {  useSelectFilteredCompetitionsBySeasonLazyQuery } from "../../../generated/graphql";



export default function FilteredCompetitionsBySeason(input: any) {
  const [fetch, { data, loading, refetch }] = useSelectFilteredCompetitionsBySeasonLazyQuery({
    variables: {
        filter: {
            season: {eq: input}
        }
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (input) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return {
    data,
    refetch,
    loading,
  };
}
