import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useDeleteOneBoxMutation } from "../../../generated/graphql";


export default function useDeleteOneBox() {
    const [mutate, data] = useDeleteOneBoxMutation({
    refetchQueries: ['listBoxes'],
    });

    async function deleteOneBox(id: string) {
        try {
            const data = await mutate({
                variables: {
                  input: {
                    id,
                  },
                },
            });
            successNotification({
                message: 'Box deletado com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao deletar box'
            });
        }
    }
    return {
        data,
        deleteOneBox
    }

}