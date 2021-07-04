import { useListAllBoxesQuery } from "../../../generated/graphql";


export default function useListAllBoxes() {
    const { data, loading, refetch } = useListAllBoxesQuery();
  
    return {
      data,
      refetch,
      loading,
    };
  }
  