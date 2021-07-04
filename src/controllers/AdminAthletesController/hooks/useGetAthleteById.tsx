import { useEffect } from 'react';
import { useGetAthleteByIdLazyQuery } from '../../../generated/graphql';

export default function useGetAthleteById(id: string) {
  const [fetch, { data, loading, refetch }] = useGetAthleteByIdLazyQuery({
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (id) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    data,
    refetch,
    loading,
  };
}
