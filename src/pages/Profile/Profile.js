import React, {Component} from "react";
import {connect} from "react-redux";
import {Row, Col, Icon, Card, Input} from "antd";
import {Redirect, Switch} from "react-router-dom";

import Content from "src/layout/Main/components/Content/Content";
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import {RouteWithSubRoutes} from "src/routes/routeWithSubRoutes";
import {appConfigs} from "src/constants/configs";
import moment from 'moment';

//selector
import {getMyProfile} from "src/selectors/profile";

//action creator
import {updateProfile} from "src/redux/actions/profile";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editProfile: false,
            profile: props.profile,
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.profile !== this.props.profile) {
            this.setState({ 
                profile: this.props.profile,
            });
        }
    }

    handleProfileChange = (event) => {
        const {name, value} = event.target;
        let newProfile = {...this.state.profile};
        newProfile[name] = value;

        this.setState({ 
            profile: newProfile
        });
    }
    

    handleEditProfile = () => {
        this.setState({editProfile: true});
    }

    handleSaveProfile = () => {
        const {profile} = this.state;
        this.props.updateProfile(profile);
        this.setState({ editProfile: false });
    }
    
    handleCancelEdit = () => {
        const {profile} = this.props;
        this.setState({
            profile,
            editProfile: false,
        });
    }

    render() {
        const {editProfile, profile} = this.state;
        const {match, routes} = this.props;
        return (
            <div>
                <Row style={{ height: 200, background: appConfigs.colors.primary}} />
                <ProfileHeader
                    editing={editProfile}
                    onEditProfile={this.handleEditProfile}
                    onSaveProfile={this.handleSaveProfile}
                    onCancelEdit={this.handleCancelEdit}
                    match={match}
                    avatar={profile.avatar}
                />
                <Content style={{marginTop: 5}}>
                    <Row>
                        <Col span={6}>
                            {!editProfile && (
                                <div style={{padding:"20px 0 0 30px",fontWeight:"400",fontSize:15}}>
                                    <h2>{profile.name}</h2>
                                    <p>{profile.nickname}</p>
                                    <p><Icon type="profile" /> {profile.bio} </p>
                                    <p><Icon type="calendar" /> Joined {moment(profile.joinedAt).format("MMMM YYYY")}</p>
                                    <p><Icon type="wallet" /> {profile.bandwidth} Oxygen</p>
                                </div>
                            )}
                            {editProfile && (
                                <Card 
                                    style={{margin:"20px 10px 0 30px", backgroundColor: appConfigs.colors.light}}
                                    bodyStyle={{padding: 12}}
                                >
                                    <Input 
                                        size="large" 
                                        name="name"
                                        value={profile.name}
                                        onChange={this.handleProfileChange}
                                    />
                                    <p style={{color: appConfigs.colors.primary, paddingTop: 5}}>
                                        {profile.nickname}
                                    </p>
                                    <Input
                                        name="bio"
                                        style={{marginBottom:5}} 
                                        value={profile.bio} 
                                        placeholder="Bio"
                                        onChange={this.handleProfileChange}
                                    />
                                    <Input
                                        name="location"
                                        style={{marginBottom:5}} 
                                        value={profile.location} 
                                        placeholder="Location" 
                                        onChange={this.handleProfileChange}
                                    />
                                    <Input
                                        name="website"
                                        style={{marginBottom:5}} 
                                        value={profile.website} 
                                        placeholder="Website"
                                        onChange={this.handleProfileChange}
                                    />
                                </Card>
                            )}
                        </Col>
                        <Col span={12}>
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                                <Redirect from={`${match.url}`} to={`${match.url}/post`} /> 
                            </Switch>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getMyProfile(state),
});

export default connect(mapStateToProps, {updateProfile})(Profile);