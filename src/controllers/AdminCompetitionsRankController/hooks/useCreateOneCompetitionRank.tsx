import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useCreateOneCompetitionRankMutation } from "../../../generated/graphql";


export default function useCreateOneCompetitionRank() {
    const [mutate, data] = useCreateOneCompetitionRankMutation({});

    async function createAthleteRank(input: any) {
        try {
            const { data } = await mutate({
                variables: {
                    input: {
                        competitionRank: {
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
        createAthleteRank
    }
}