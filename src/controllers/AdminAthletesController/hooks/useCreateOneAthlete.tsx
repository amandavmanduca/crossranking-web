import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { CreateOneAthleteInput, useCreateOneAthleteMutation } from "../../../generated/graphql";


export default function useCreateOneAthlete() {
    const [mutate, data] = useCreateOneAthleteMutation({
        refetchQueries: ['listAthletesAdmin'],
      });

    async function createOneAthlete(input: any) {
        try {
            const { data } = await mutate({
                variables: {
                    input: {
                        athlete: {
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
                message: 'Atleta criado com sucesso'
            });
            return data;
        } catch (error) {
            console.log("Erro: ", error);
            errorNotification({
                message: 'Erro ao criar atleta'
            });
        }
    }

    return {
        createOneAthlete,
        data
    }
}