import React, {Component} from "react";
import {Col, Layout, Menu, Row, Icon, Button} from "antd";
import {Link} from "react-router-dom";

import {menuItems} from "src/constants/menuItems";
import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";
import TweetButton from 'src/components/TweetButton/TweetButton';

import './Header.css';

const {Header} = Layout;
const {SubMenu} = Menu;
const MenuItemGroup = Menu.ItemGroup;

class BaseHeader extends Component {
    render() {
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
                                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/p240x240/47286827_1110366432446545_851657281396277248_n.jpg?_nc_cat=107&_nc_ht=scontent.fsgn2-1.fna&oh=027d2ab5166d4d4998af7eaba8956dac&oe=5CAB7746" 
                                />}
                            >
                                <MenuItemGroup title={<div>
                                        <b style={{fontSize:18,fontWeight:"bold",color:"#000"}}>Phạm Khắc Quyền</b><br/>
                                        <span style={{fontSize:15,}}>@QuyenPhamKhac</span>
                                    </div>} style={{borderBottom:"1px solid grey"}}
                                    style={{borderBottom:"0.03rem solid rgba(40, 46, 50, 0.3)"}}>
                                </MenuItemGroup>
                                <MenuItemGroup title={null} style={{padding:0}}>
                                    <Menu.Item key="profile"><Icon type="user" />Profile</Menu.Item>
                                    <Menu.Item key="settings"><Icon type="setting" />Settings</Menu.Item>
                                    <Menu.Item key="signout"><Icon type="logout" />Sign Out</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item  style={{
                                borderBottom: 0,
                            }}>
                                <TweetButton>
                                    Tweet
                                </TweetButton>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default BaseHeader;