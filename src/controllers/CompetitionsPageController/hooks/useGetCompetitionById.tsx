import { useEffect } from 'react';
import { useGetCompetitionByIdLazyQuery } from '../../../generated/graphql';

export default function useGetCompetitionById(categodyId: any, competitionId: any) {
  const [fetch, { data, loading, refetch }] = useGetCompetitionByIdLazyQuery({
    variables: {
      filter: {
        category: {id: {eq: categodyId}},
        competition: {id: {eq: competitionId}}
      }
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (categodyId && competitionId) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categodyId, competitionId]);

  return {
    data,
    refetch,
    loading,
  };
}
