import React, { Component } from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {Link} from "react-router-dom";

import {profileMenuItems} from "src/constants/menuItems";

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
        const {editing, match, avatar} = this.props;
        return (
            <Header style={{width: '100%', backgroundColor: "#FFF", height: 60}}>
                <Content style={{padding:"0 60px"}}>
                    <Row>
                        <Col span={6}>
                            <AvatarTweet size={220} 
                                src={avatar}
                                style={{
                                    position: "absolute",
                                    top: -140,
                                    left: 20,
                                    zIndex: 1,
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
                                {profileMenuItems.map((menuItem, index) => (
                                    <Menu.Item key={index}>
                                        <Link to={`${match.url}${menuItem.path}`}>
                                            <b>{menuItem.title}</b>
                                        </Link>
                                    </Menu.Item>
                                ))}
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