import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { UpdateOneBoxInput, useUpdateOneBoxMutation } from "../../../generated/graphql";


export default function useUpdateOneBox() {
    const [mutate, data] = useUpdateOneBoxMutation({
        refetchQueries: ['listBoxes'],
    });

    async function updateOneBox(input: UpdateOneBoxInput) {
        console.log('input ', input);
        try {
            const data = await mutate({
                variables: {
                    input: {
                        id: input.id,
                        update: {
                            name: input.update.name,
                            logo: input.update.logo,
                            city: input.update.city
                        }
                    }
                }
            })
            successNotification({
                message: 'Box atualizado com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao atualizar box'
            });
        }
    }
    return {
        data,
        updateOneBox
    }
}