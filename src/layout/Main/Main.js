import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, Switch,withRouter} from "react-router-dom";

import routeMapping from "src/routes/routeMapping";
import BaseLayout from "src/components/Layout/Layout";
import Header from "src/layout/Main/components/Header/Header";
import {RouteWithSubRoutes} from "src/routes/routeWithSubRoutes";
import {Spin} from 'antd';
import pagePaths from "src/constants/pagePaths";

class Main extends Component {

    render() {
        const {location, request} = this.props;
        return (
            <Spin spinning={request.loading}>
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
            </Spin>
        );
    }
};

const mapStateToProps = (state) => ({
    request: state.request,
});

export default withRouter(connect(mapStateToProps, {})(Main));
