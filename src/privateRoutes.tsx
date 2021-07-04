import { parseCookies } from 'nookies';
import { Route, Redirect, useHistory } from 'react-router-dom'; 
import { errorNotification } from './components/atoms/Notification';

type Props = {
    component: any;
    path: any;
    exact?: any;
}

export default function PrivateRoutes({
    component,
    path,
    exact
}: Props) {

    const history = useHistory();
    const cookieToken = parseCookies()['@crossranking:token'];

    return(
        <>
            {cookieToken ? (
                <Route  path={path}  exact={exact} component={component} />
            ) : (
                history.push('/admin/login')
                )
            }
        </>
    )
}