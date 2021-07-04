import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useUpdateOneCompetitionMutation } from "../../../generated/graphql";


export default function useUpdateOneCompetition() {
    const [mutate, data] = useUpdateOneCompetitionMutation({
        refetchQueries: ['listCompetitions'],
    });

    async function updateOneCompetition(input: any) {
        try {
            const data = await mutate({
                variables: {
                    input: {
                        id: input.competition.id,
                        update: {
                            id: input.id,
                            name: input.competition.name,
                            place: input.competition.place,
                            season: Number(input.competition.season),
                            categories: input.competition.categories.map((category: any) => ({
                                id: category
                            }))
                        }
                    }
                }
            })
            successNotification({
                message: 'Competição atualizada com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao atualizar competição'
            });
        }
    }
    return {
        data,
        updateOneCompetition
    }
}