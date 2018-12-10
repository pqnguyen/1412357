import React, {Component} from "react";
import {Col, Layout, Menu, Row, Icon} from "antd";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {menuItems} from "src/constants/menuItems";
import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";

//selector
import {getMyProfile} from "src/selectors/profile";

import './Header.css';

const {Header} = Layout;
const {SubMenu} = Menu;
const MenuItemGroup = Menu.ItemGroup;

class BaseHeader extends Component {
    render() {
        const {profile} = this.props;
        return (
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#FFF", height: 46}}>
                <Row>
                    <Col span={18} offset={1}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                            style={{lineHeight: '46px'}}
                        >
                            {menuItems.map((menuItem, index) =>
                                <Menu.Item key={index}>
                                    <Link to={menuItem.path}>
                                        <Icon type={menuItem.iconType}/> {menuItem.title}
                                    </Link>
                                </Menu.Item>
                            )}
                        </Menu>
                    </Col>
                    <Col span={4}>
                        <Menu
                            theme="light"  
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                            style={{lineHeight: '46px'}}
                        >
                            <SubMenu 
                                style={{borderBottom:0,}}
                                title={ <AvatarTweet 
                                    size={25} 
                                    src={profile.avatar} 
                                />}
                            >
                                <MenuItemGroup title={<div>
                                        <b style={{fontSize:18,fontWeight:"bold",color:"#000"}}>{profile.name}</b><br/>
                                        <span style={{fontSize:15,}}>{profile.nickname}</span>
                                    </div>}
                                    style={{borderBottom:"0.03rem solid rgba(40, 46, 50, 0.3)"}}>
                                    <Menu.Item key={0}>
                                        <Link to={`/profile/${profile.id}`}>
                                            <Icon type="user" /> Profile
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key={1}>
                                        <Icon type="logout" /> Sign out
                                    </Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getMyProfile(state),
});

export default connect(mapStateToProps, {})(BaseHeader);