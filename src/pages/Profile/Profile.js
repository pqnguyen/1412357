import React, {Component} from "react";
import {connect} from "react-redux";
import {Row, Col, Icon, Card, Input} from "antd";
import {Route, Redirect, Switch} from "react-router-dom";


import Content from "src/layout/Main/components/Content/Content";
import ProfileHeader from './components/ProfileHeader/ProfileHeader';

import {appConfigs} from "src/constants/configs"; 

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

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editProfile: false,
        }
    }

    handleEditProfile = () => {
        this.setState({editProfile: true});
    }

    handleSaveProfile = () => {
        this.setState({editProfile: false});
    }
    
    handleCancelEdit = () => {
        this.setState({editProfile: false});
    }

    render() {
        const {editProfile} = this.state;
        const {match,routes} = this.props;
        return (
            <div>
                <Row style={{ height: 200, background: appConfigs.colors.primary}} />
                <ProfileHeader
                    editing={editProfile}
                    onEditProfile={this.handleEditProfile}
                    onSaveProfile={this.handleSaveProfile}
                    onCancelEdit={this.handleCancelEdit}
                    match={match}
                />
                <Content style={{marginTop: 5}}>
                    <Row>
                        <Col span={6}>
                            {!editProfile && (
                                <div style={{padding:"20px 0 0 30px",fontWeight:"400",fontSize:15}}>
                                    <h2>Phạm Khắc Quyền</h2>
                                    <p>@QuyenPhamKhac</p>
                                    <p><Icon type="calendar" /> Joined December 2018</p>
                                </div>
                            )}
                            {editProfile && (
                                <Card 
                                    style={{margin:"20px 10px 0 30px", backgroundColor: appConfigs.colors.light}}
                                    bodyStyle={{padding: 12}}
                                >
                                    <Input size="large" defaultValue="Phạm Khắc Quyền" />
                                    <p style={{color: appConfigs.colors.primary, paddingTop: 5}}>@QuyenPhamKhac</p>
                                    <Input style={{marginBottom:5}} placeholder="Bio" />
                                    <Input style={{marginBottom:5}} placeholder="Location" />
                                    <Input style={{marginBottom:5}} placeholder="Website" />
                                </Card>
                            )}
                        </Col>
                        <Col span={12}>
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                                <Redirect from={`${match.url}`} to={`${match.url}/tweet`} /> 
                            </Switch>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(Profile);