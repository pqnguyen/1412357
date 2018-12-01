import React, {Component} from "react";
import {Col, Layout, Menu, Row, Icon} from "antd";

import './Header.css';
import {menuItems} from "src/constants/menuItems";
import {Link} from "react-router-dom";

const {Header} = Layout;

class BaseHeader extends Component {
    render() {
        return (
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#FFF", height: 46}}>
                <Row>
                    <Col span={22} offset={1}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
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
                </Row>
            </Header>
        );
    }
}

export default BaseHeader;