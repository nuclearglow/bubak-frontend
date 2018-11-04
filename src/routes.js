import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import MainView from './screens/main-view/MainView';

export const ROUTES = {
    SLASH: '/'
};

class RouteSetup extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={ROUTES.SLASH} component={MainView} />
                {/* <Route path="*" component={ErrorView} />} /> */}
            </Switch>
        );
    }
}

export default withRouter(RouteSetup);
