
import { useSelectBoxesQuery } from "../../../generated/graphql";

export default function BoxesArray() {
    const { data, loading, refetch } = useSelectBoxesQuery({});

    return {
      data,
      refetch,
      loading,
    };
}