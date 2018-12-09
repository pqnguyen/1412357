import React, { Component } from 'react';
import BaseLayout from "src/components/Layout/Layout";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import GoogleButton from 'react-google-button';
import {Layout, Col, Row,Card} from 'antd';

const {Content} = Layout;

class Login extends Component {
    render() {
        return (
            <BaseLayout style={{backgroundColor: "#F0F2F5"}}>
               <LoginHeader menuIndex={0} />
               <Row style={{padding: '0 50px', marginTop: 60}}>
                    <Col span={16} offset={4}>
                        <Content>
                            <Card style={{
                                padding: "10px 40px"
                            }}>
                                <h3>Log in to Forest Network</h3>
                                <GoogleButton
                                    onClick={() => { console.log('Google button clicked') }}
                                />
                            </Card>
                        </Content>
                    </Col>
                </Row>
            </BaseLayout>
        );
    }
}

export default Login;