import React, { Component } from 'react';
import BaseLayout from "src/components/Layout/Layout";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import GoogleButton from 'react-google-button';
import {Layout, Col, Row,Card} from 'antd';
import {Redirect} from 'react-router-dom';

//react-redux-firebase
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const {Content} = Layout;

class Login extends Component {
    render() {
        const {firebase, auth} = this.props;
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
                                    onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
                                />
                                {!isLoaded(auth)
                                    ? <h4>Authen checking ...</h4>
                                        : isEmpty(auth)
                                            ? <h4>Please log in to using Forest Network</h4>
                                            : <Redirect to="/home" />}
                            </Card>
                        </Content>
                    </Col>
                </Row>
            </BaseLayout>
        );
    }
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(Login)