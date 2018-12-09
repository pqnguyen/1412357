import React, { Component } from 'react';
import BaseLayout from "src/components/Layout/Layout";
import LoginHeader from "../Login/components/LoginHeader/LoginHeader";
import {Layout, Col, Row,Card} from 'antd';

const {Content} = Layout;

class AboutUs extends Component {
    render() {
        return (
            <BaseLayout style={{backgroundColor: "#F0F2F5"}}>
               <LoginHeader menuIndex={1} />
               <Row style={{padding: '0 50px', marginTop: 60}}>
                    <Col span={16} offset={4}>
                        <Content>
                            <Card style={{
                                padding: "10px 40px"
                            }}>
                                <h2>About us</h2>
                                <hr/>

                                <h3>Phạm Khắc Quyền - 1412446</h3>
                                <h3>Phan Quang Nguyên - 1412357</h3>
                            </Card>
                        </Content>
                    </Col>
                </Row>
            </BaseLayout>
        );
    }
}

export default AboutUs;