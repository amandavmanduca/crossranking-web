import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { UpdateOneAthleteInput, useUpdateOneAthleteMutation } from "../../../generated/graphql";


export default function useUpdateOneAthlete() {
    const [mutate, data] = useUpdateOneAthleteMutation({
        refetchQueries: ['listAthletesAdmin'],
    });

    async function updateOneAthlete(input: any) {
        try {
            const data = await mutate({
                variables: {
                    input: {
                        id: input.id,
                        update: {
                            firstname: input.athlete.firstname,
                            lastname: input.athlete.lastname,
                            birth: input.athlete.birth ? input.athlete.birth : null,
                            sex: input.athlete.sex ? input.athlete.sex : null,
                            cpf: input.athlete.cpf ? input.athlete.cpf : null,
                            email: input.athlete.email ? input.athlete.email : null,
                            category: {
                                id: input.athlete.categoryId,
                            },
                            box: {
                                id: input.athlete.boxId,
                            }
                        }
                    }
                }
            })
            successNotification({
                message: 'Atleta atualizado com sucesso'
            });
            return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Erro ao atualizar atleta'
            });
        }
    }
    return {
        data,
        updateOneAthlete
    }
}