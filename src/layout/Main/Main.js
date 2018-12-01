import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";

import routeMapping from "src/routes/routeMapping";
import BaseLayout from "src/components/Layout/Layout";
import Header from "src/layout/Main/components/Header/Header";
import Content from "src/layout/Main/components/Content/Content";

class Main extends Component {
    constructor(props) {
        super(props);

        const staticRoutes = routeMapping.map(({path, component}) => (
            <Route key={path} exact path={path} component={component}/>
        ));

        this.routes = [...staticRoutes];
    }

    render() {
        return (
            <BaseLayout style={{backgroundColor: "#F0F2F5"}}>
                <Header>Header</Header>
                <Content>
                    <Switch>
                        {this.routes}
                    </Switch>
                </Content>
            </BaseLayout>
        );
    }
}

export default withRouter(connect()(Main));
