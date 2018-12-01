import React, {Component} from "react";
import {Layout, Col, Row} from "antd";

const {Content} = Layout;

class BaseContent extends Component {
    render() {
        return (
            <Row style={{padding: '0 50px', marginTop: 60}}>
                <Col span={22} offset={1}>
                    <Content>
                        {this.props.children}
                    </Content>
                </Col>
            </Row>
        );
    }
}

export default BaseContent;