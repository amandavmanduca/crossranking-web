import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useRemoveCompetitionsFromAthleteMutation } from "../../../generated/graphql";


export default function useRemoveCompetitionsFromAthlete() {
    const [mutate, data] = useRemoveCompetitionsFromAthleteMutation({
        refetchQueries: ['listAthletesAdmin'],
    });

    async function removeCompetitionsFromAthlete(input: any) {
        // const newCompetitions = input.competitions.filter((el: any) => !input.initialCompetitions.includes(el))
        // const competitionsToRemove = input.initialCompetitions.filter((el: any) => !input.competitions.includes(el))
        if(input.competitionsToRemove.length > 0) {
        try {
            const data = await mutate({
                variables: {
                    input: {
                        id: input.athlete,
                        relationIds: input.competitionsToRemove,
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
    }
    return {
        data,
        removeCompetitionsFromAthlete
    }
}