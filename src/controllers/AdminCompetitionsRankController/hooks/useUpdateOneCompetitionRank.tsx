import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useUpdateOneCompetitionRankMutation } from "../../../generated/graphql";


export default function useUpdateOneCompetitionRank() {
    const [mutate, data] = useUpdateOneCompetitionRankMutation({
        refetchQueries: ['listBoxes', 'listFilteredAthletes'],
    });

    async function updateAthleteRank(input: any) {
        console.log(input);
        try {
            const { data } = await mutate({
                variables: {
                    input: {
                        id: input.competitionRank,
                        update: {
                            rank: Number(input.rank),
                            points: Number(input.points),
                            athlete: {
                                id: input.athlete
                            },
                            category: {
                                id: input.category
                            },
                            competition: {
                                id: input.competition
                            },
                        }
                    }
                }
            })
            successNotification({
                message: 'Rank inserido com sucesso'
            });
            return data;
        } catch (error) {
            console.log("Erro: ", error);
            errorNotification({
                message: 'Erro ao inserir rank'
            });
        }
    }
    return {
        data,
        updateAthleteRank
    }
}