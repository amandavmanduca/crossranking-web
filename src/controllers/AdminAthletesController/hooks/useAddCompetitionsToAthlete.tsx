import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useAddCompetitionsToAthleteMutation } from "../../../generated/graphql";
import useRemoveCompetitionsFromAthlete from "./useRemoveCompetitionsFromAthlete";


export default function useAddCompetitionsToAthlete() {
    const [mutate, data] = useAddCompetitionsToAthleteMutation({
        refetchQueries: ['listAthletesAdmin'],
    });

    const { removeCompetitionsFromAthlete } = useRemoveCompetitionsFromAthlete()

    async function addCompetitionsToAthlete(input: any) {
        const newCompetitions = input.competitions.filter((el: any) => !input.initialCompetitions.includes(el))
        const competitionsToRemove = input.initialCompetitions.filter((el: any) => !input.competitions.includes(el))
        if(newCompetitions.length > 0) {
        try {
            const data = await mutate({
                variables: {
                    input: {
                        id: input.athlete,
                        relationIds: newCompetitions,
                    }
                }
            })
            successNotification({
                message: 'Competições vinculadas com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao vincular competições'
            });
        }}
        if(competitionsToRemove.length > 0) {
            removeCompetitionsFromAthlete({
                athlete: input.athlete,
                competitionsToRemove: competitionsToRemove,
            })
        }
    }
    return {
        data,
        addCompetitionsToAthlete
    }
}