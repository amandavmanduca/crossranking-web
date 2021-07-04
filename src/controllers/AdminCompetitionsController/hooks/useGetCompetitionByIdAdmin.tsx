import { useEffect } from 'react';
import { useGetCompetitionByIdAdminLazyQuery } from '../../../generated/graphql';

export default function useGetCompetitionByIdAdmin(id: string) {
  const [fetch, { data, loading, refetch }] = useGetCompetitionByIdAdminLazyQuery({
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
