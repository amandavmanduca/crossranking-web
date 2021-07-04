import { useEffect } from 'react';
import { useGetBoxByIdLazyQuery } from '../../../generated/graphql';

export default function useGetBoxById(id: string) {
  const [fetch, { data, loading, refetch }] = useGetBoxByIdLazyQuery({
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
