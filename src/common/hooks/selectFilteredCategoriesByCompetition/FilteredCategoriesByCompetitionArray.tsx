
import { Input } from "antd";
import { useSelectFilteredCategoriesByCompetitionQuery } from "../../../generated/graphql";

export default function FilteredCategoriesByCompetitionArray(input: any) {
    const { data, loading, refetch } = useSelectFilteredCategoriesByCompetitionQuery({
        variables: {
            filter: {
                competitions: {
                        id: {eq: input}
                }
            }
        }
    });
    return {
      data,
      refetch,
      loading,
    };
}