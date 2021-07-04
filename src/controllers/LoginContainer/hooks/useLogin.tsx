import { errorNotification, successNotification } from "../../../components/atoms/Notification";
import { AuthInput, useAdminLoginMutation } from "../../../generated/graphql";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useHistory } from "react-router-dom";

export default function useLogin() {
    const history = useHistory();
    const [mutate, data] = useAdminLoginMutation({});

    async function login(input: AuthInput) {
        try {
            const data = await mutate({
                variables: {
                    data: {
                        email: input.email,
                        password: input.password,
                        
                    }
                }
            })
            destroyCookie(null, '@crossranking:admin');
            destroyCookie(null, '@crossranking:token');
            setCookie(null, '@crossranking:admin', JSON.stringify(data?.data?.login.admin), {
              maxAge: 30 * 24 * 60 * 60,
            });
            setCookie(null, '@crossranking:token', JSON.stringify(data?.data?.login.token), {
              maxAge: 30 * 24 * 60 * 60,
            });
            successNotification({
                message: 'Bem Vindo!'
            });
            history.push('/admin/box');
            // return data;
        } catch (error) {
            console.log('Erro: ', error);
            errorNotification({
                message: 'Acesso não autorizado'
            });
        }
    }
    return {
        data,
        login
    }
}