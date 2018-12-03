import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, Redirect, Switch,withRouter} from "react-router-dom";

import routeMapping from "src/routes/routeMapping";
import BaseLayout from "src/components/Layout/Layout";
import Header from "src/layout/Main/components/Header/Header";

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}



class Main extends Component {

    render() {
        return (
            <BaseLayout style={{backgroundColor: "#F0F2F5"}}>
                <Header>Header</Header>
                <Switch>
                    {routeMapping.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <Redirect from="/" to="/home" /> 
                </Switch>
            </BaseLayout>
        );
    }
}

export default withRouter(connect()(Main));
