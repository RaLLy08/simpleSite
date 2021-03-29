import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from '../routes';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {publicRoutes.map(({ path, Component }) => 
                    <Route 
                        key={path}
                        path={path}
                        component={Component}
                        exact
                    />
                )}
                <Redirect to="/start" />
            </Switch>
        </Router>
    )
}

export default AppRouter;