import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useCreateOneAdminMutation } from "../../../generated/graphql";



export default function useCreateOneAdmin() {
    const [mutate, data] = useCreateOneAdminMutation({
        refetchQueries: ['listAdmins'],
      });

    async function createOneAdmin(input: any) {
        try {
            const { data } = await mutate({
                variables: {
                    input: {
                        admin: {
                            name: input.admin.name,
                            email: input.admin.email,
                            password: input.admin.password,
                        }
                    }
                }
            })
            successNotification({
                message: 'Admin criado com sucesso'
            });
            return data;
        } catch (error) {
            console.log("Erro: ", error);
            errorNotification({
                message: 'Erro ao criar admin'
            });
        }
    }

    return {
        createOneAdmin,
        data
    }
}