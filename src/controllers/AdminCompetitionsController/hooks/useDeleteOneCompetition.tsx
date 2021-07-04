import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useDeleteOneCompetitionMutation } from "../../../generated/graphql";


export default function useDeleteOneCompetition() {
    const [mutate, data] = useDeleteOneCompetitionMutation({
    refetchQueries: ['listCompetitions'],
    });

    async function deleteOneCompetition(id: string) {
        try {
            const data = await mutate({
                variables: {
                  input: {
                    id,
                  },
                },
            });
            successNotification({
                message: 'Competição excluida com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao excluir competição'
            });
        }
    }
    return {
        data,
        deleteOneCompetition
    }

}