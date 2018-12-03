import React, { Component } from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {Link} from "react-router-dom";

import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";
import TweetButton from 'src/components/TweetButton/TweetButton';

const {Header,Content} = Layout;

class ProfileHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMyPage: true,
        }
    }

    render() {
        const {isMyPage} = this.state;
        const {editing,match} = this.props;
        return (
            <Header style={{width: '100%', backgroundColor: "#FFF", height: 60}}>
                <Content style={{padding:"0 60px"}}>
                    <Row>
                        <Col span={6}>
                            <AvatarTweet size={220} 
                                src="https://pbs.twimg.com/profile_images/1069150269902966784/L24DeNKF_400x400.jpg"
                                style={{
                                    position: "absolute",
                                    top: -140,
                                    left: 20,
                                    zIndex: 2,
                                    border: "4px solid #fff"
                                }} 
                            />
                        </Col>
                        <Col span={12}>
                            <Menu
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={['0']}
                                style={{lineHeight: '60px'}}
                            >
                                <Menu.Item key={0}>
                                    <Link to={`${match.url}/tweet`}>
                                        <b>Tweets</b>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={1}>
                                    <Link to={`${match.url}/following`}>
                                        <b>Following</b>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={2}>
                                    <Link to={`${match.url}/follower`}>
                                        <b>Follower</b>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6}>
                            {isMyPage ? (
                                <React.Fragment>
                                    {!editing && (
                                        <TweetButton size="large"
                                            clicked={this.props.onEditProfile}
                                        >
                                            Edit profile
                                        </TweetButton>
                                    )}
                                    {editing && (
                                        <React.Fragment>
                                            <TweetButton size="large"
                                                clicked={this.props.onCancelEdit}
                                            >
                                                Cancel
                                            </TweetButton>
                                            <TweetButton size="large"
                                                type="primary"
                                                clicked={this.props.onSaveProfile}
                                            >
                                                Save changes
                                            </TweetButton>
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            ) : (
                                <TweetButton type="primary" size="large">
                                    Follow
                                </TweetButton>
                            )}
                        </Col>
                    </Row>
                </Content>
            </Header>
        );
    }
}

export default ProfileHeader;