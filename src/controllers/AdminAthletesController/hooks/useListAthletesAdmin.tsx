import { useListAthletesAdminQuery } from "../../../generated/graphql";


export default function useListAthletesAdmin() {
    const { loading, refetch, data } = useListAthletesAdminQuery();
    return {
        data
    }
}