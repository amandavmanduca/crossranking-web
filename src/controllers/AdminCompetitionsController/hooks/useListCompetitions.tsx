import { useListCompetitionsQuery } from "../../../generated/graphql";


export default function useListCompetitions() {
    const { loading, refetch, data } = useListCompetitionsQuery();
    return {
        data
    }
}