import { useSelectCategoriesQuery } from "../../../generated/graphql";

export default function CategoriesArray() {
    const { data, loading, refetch } = useSelectCategoriesQuery({});

    return {
      data,
      refetch,
      loading,
    };
}