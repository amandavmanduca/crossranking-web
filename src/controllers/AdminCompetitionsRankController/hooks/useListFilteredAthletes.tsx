import { useEffect } from "react";
import { useListFilteredAthletesLazyQuery } from "../../../generated/graphql";


export default function useListFilteredAthletes(competition: string, category: string) {

    const [fetch, { data, loading, refetch }] = useListFilteredAthletesLazyQuery({
        variables: {
            // filterRank: {
            //     and: [
            //         {
            //             category: {id: {eq: category}}
            //         },
            //         {
            //             competition: {id: {eq: competition}}
            //         }
            //     ]
            // },
            filter: {
                and: [
                    {competitions: {
                        id: {eq: competition}
                    }},
                    {category: {id: {eq: category}}}
                ]
            },
        },
        fetchPolicy: 'network-only',
      });

      useEffect(() => {
        if (!!competition && !!category) {
            fetch();
        } 
      },[competition, category])

    // async function filterAthletes(competition: string, category: string) {
    //     if (!!competition && !!category) {
    //         refetch();
    //     }
        
    //     const { data } = await refetch({
    //         filter: {
    //             and: [
    //                 {competitions: {
    //                     id: {eq: competition}
    //                 }},
    //                 {category: {id: {eq: category}}}
    //             ]
    //         },

    //         // filterRank: {
    //         //     and: [
    //         //         {competition: {id: {eq: competition}},},
    //         //         {category: {id: {eq: category}}}
    //         //     ]
    //         // }
    //     });
    
    //     return data;
    //   }

    return {
        data,
        // filterAthletes
    }
}


