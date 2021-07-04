import { useListAdminsQuery } from "../../../generated/graphql";


export default function useListAdmins() {
    const { loading, refetch, data } = useListAdminsQuery();
    return {
        data
    }
}