import { useEffect } from 'react';
import { useGetAdminByIdLazyQuery } from '../../../generated/graphql';

export default function useGetAdminById(id: string) {
  const [fetch, { data, loading, refetch }] = useGetAdminByIdLazyQuery({
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
