import React from 'react';
import { useListBoxesQuery } from '../../../generated/graphql';



export default function useListBoxes() {
    const { loading, refetch, data } = useListBoxesQuery();

    return {
        data,
        refetch
    }
}