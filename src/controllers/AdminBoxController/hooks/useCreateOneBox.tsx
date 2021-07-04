import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { CreateOneBoxInput, useCreateOneBoxMutation } from "../../../generated/graphql";


export default function useCreateOneBox() {
    const [mutate, data] = useCreateOneBoxMutation({
        refetchQueries: ['listBoxes'],
      });

    async function createBox(input: CreateOneBoxInput) {
        try {
            const { data } = await mutate({
                variables: {
                    input: {
                        box: {
                            name: input.box.name,
                            logo: input.box.logo,
                            city: input.box.city,
                        }
                    }
                }
            })
            successNotification({
                message: 'Box criado com sucesso'
            });
            return data;
        } catch (error) {
            console.log("Erro: ", error);
            errorNotification({
                message: 'Erro ao criar box'
            });
        }
    }

    return {
        createBox,
        data
    }
}