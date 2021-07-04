import { useSelectCompetitionsQuery } from "../../../generated/graphql";

export default function CompetitionsArray() {
    const { data, loading, refetch } = useSelectCompetitionsQuery({});

    return {
      data,
      refetch,
      loading,
    };
}