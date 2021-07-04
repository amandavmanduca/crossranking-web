import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { CreateOneCompetitionInput, useCreateOneCompetitionMutation } from "../../../generated/graphql";


export default function useCreateOneCompetition() {
    const [mutate, data] = useCreateOneCompetitionMutation({
        refetchQueries: ['listCompetitions', 'listFilteredAthletes'],
      });

    async function createCompetition(input: any) {
        try {
            const { data } = await mutate({
                variables: {
                    input: {
                        competition: {
                            name: input.competition.name,
                            date: input.competition.date,
                            place: input.competition.place,
                            season: Number(input.competition.season),
                            weight: null,
                            categories: input.competition.categories.map((category: any) => ({
                                id: category
                            }))
                        }
                    }
                }
            })
            successNotification({
                message: 'Competição criada com sucesso'
            });
            return data;
        } catch (error) {
            console.log("Erro: ", error);
            errorNotification({
                message: 'Erro ao criar competição'
            });
        }
    }

    return {
        createCompetition,
        data
    }
}