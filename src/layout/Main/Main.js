import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, Switch,withRouter} from "react-router-dom";

import routeMapping from "src/routes/routeMapping";
import BaseLayout from "src/components/Layout/Layout";
import Header from "src/layout/Main/components/Header/Header";
import {RouteWithSubRoutes} from "src/routes/routeWithSubRoutes";

import pagePaths from "src/constants/pagePaths";

class Main extends Component {

    render() {
        const {location} = this.props;
        return (
            <BaseLayout style={{backgroundColor: "#F0F2F5"}}>
                {!["/login", "/about"].includes(location.pathname) && (
                    <Header>Header</Header>
                )}
                <Switch>
                    {routeMapping.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <Redirect from={`${pagePaths.MAIN_APP}`} to={`${pagePaths.LOGIN}`} />
                </Switch>
            </BaseLayout>
        );
    }
}

export default withRouter(connect()(Main));
