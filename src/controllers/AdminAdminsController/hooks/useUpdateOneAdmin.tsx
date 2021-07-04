import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { useUpdateOneAdminMutation } from "../../../generated/graphql";



export default function useUpdateOneAdmin() {
    const [mutate, data] = useUpdateOneAdminMutation({
        refetchQueries: ['listAdmins'],
      });

    async function updateOneAdmin(input: any) {
        try {
            const { data } = await mutate(
                input.admin.password ?
                {
                    variables: {
                        input: {
                            id: input.id,
                            update: {
                                name: input.admin.name,
                                email: input.admin.email,
                                password: input.admin.password,    
                            }

                        }
                    }
                }
                :
                {
                    variables: {
                        input: {
                            id: input.id,
                            update: {
                                name: input.admin.name,
                                email: input.admin.email,   
                            }

                        }
                    }
                }
            )
            successNotification({
                message: 'Admin atualizado com sucesso'
            });
            return data;
        } catch (error) {
            console.log("Erro: ", error);
            errorNotification({
                message: 'Erro ao atualizar admin'
            });
        }
    }

    return {
        updateOneAdmin,
        data
    }
}