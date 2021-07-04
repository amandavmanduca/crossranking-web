import AdminLoginTemplate from "../../components/templates/AdminLoginTemplate";
import useLogin from "./hooks/useLogin";

export default function LoginContainer() {
    const { login } = useLogin()
    return(
        <AdminLoginTemplate
            login={login}
        />
    );
}