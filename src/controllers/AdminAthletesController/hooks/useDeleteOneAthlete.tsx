import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useDeleteOneAthleteMutation } from "../../../generated/graphql";


export default function useDeleteOneAthlete() {
    const [mutate, data] = useDeleteOneAthleteMutation({
    refetchQueries: ['listAthletesAdmin'],
    });

    async function deleteOneAthlete(id: string) {
        try {
            const data = await mutate({
                variables: {
                  input: {
                    id,
                  },
                },
            });
            successNotification({
                message: 'Atleta deletado com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao deletar atleta'
            });
        }
    }
    return {
        data,
        deleteOneAthlete
    }

}