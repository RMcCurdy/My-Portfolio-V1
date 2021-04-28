import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from '../pages/web/Home';
import Login  from '../pages/web/Login';
import SignUp  from '../pages/web/SignUp';
import Logout from '../pages/web/Logout';
import PageNotFound from '../pages/shared/PageNotFound';
import Leaderboard from '../pages/utils/leaderboard/Leaderboard';

function Routes() {

  return (
    <>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/leaderboard" exact component={Leaderboard} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
    </>
  )
}

export default Routes;
