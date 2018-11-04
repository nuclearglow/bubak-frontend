import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import LandingView from './screens/landing-view/LandingView';
import KonzisView from './screens/konzis-view/KonzisView';

export const ROUTES = {
    SLASH: '/',
    KONZIS: '/konzis',
};

class RouteSetup extends Component {
    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Switch>
                <Route exact path={ROUTES.SLASH} component={LandingView} />
                <Route exact path={ROUTES.KONZIS} component={KonzisView} />} />
                {/* <Route path="*" component={ErrorView} />} /> */}
            </Switch>
        );
    }
}

export default withRouter(RouteSetup);
