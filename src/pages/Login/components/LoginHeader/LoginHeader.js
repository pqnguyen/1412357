import React, {Component} from "react";
import {Col, Layout, Menu, Row, Icon} from "antd";
import {Link} from "react-router-dom";

import {loginMenuItems} from "src/constants/menuItems";

const {Header} = Layout;

class LoginHeader extends Component {
    render() {
        const {menuIndex} = this.props;
        return (
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#FFF", height: 46}}>
                <Row>
                    <Col span={12} offset={4}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={[`${menuIndex}`]}
                            style={{lineHeight: '46px'}}
                        >
                            {loginMenuItems.map((menuItem, index) =>
                                <Menu.Item key={index}>
                                    <Link to={menuItem.path}>
                                        {menuItem.iconType && <Icon type={menuItem.iconType} theme="filled"/>}
                                        <b>{menuItem.title}</b>
                                    </Link>
                                </Menu.Item>
                            )}
                        </Menu>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default LoginHeader;