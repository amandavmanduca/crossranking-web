import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './privateRoutes';

// admins
import AdminBoxController from './controllers/AdminBoxController';
import AdminAthletesController from './controllers/AdminAthletesController';
import AdminAdminsController from './controllers/AdminAdminsController';
import AdminCompetitionsRankController from './controllers/AdminCompetitionsRankController';
import AdminCompetitionsController from './controllers/AdminCompetitionsController';
import LoginContainer from './controllers/LoginContainer';

//external
import LeaderboardPageController from './controllers/LeaderboardPageController';
import BoxPageController from './controllers/BoxPageController';
import AthletesPageController from './controllers/AthletesPageController';
import CompetitionsPageController from './controllers/CompetitionsPageController';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={LeaderboardPageController} path="/" exact={true} />
                <Route component={CompetitionsPageController} path="/competitions" exact={true} />
                <Route component={BoxPageController} path="/box" exact={true} />
                <Route component={AthletesPageController} path="/athlete" exact={true} />
                <PrivateRoute component={AdminBoxController} path="/admin/box" exact={true} />
                <PrivateRoute component={AdminAthletesController} path="/admin/athletes" exact={true} />
                <PrivateRoute component={AdminAdminsController} path="/admin/admins" exact={true} />
                <PrivateRoute component={AdminCompetitionsRankController} path="/admin/competitions-rank" exact={true} />
                <PrivateRoute component={AdminCompetitionsController} path="/admin/competitions" exact={true} />
                <Route component={LoginContainer} path="/admin/login" exact={true} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
