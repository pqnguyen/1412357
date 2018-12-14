import React, { Component } from 'react';
import BaseLayout from "src/components/Layout/Layout";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import TweetButton from 'src/components/TweetButton/TweetButton';
import {Layout, Col, Row, Card, Icon, Input} from 'antd';
import {Link} from 'react-router-dom';
import {authLogin} from "src/redux/actions/auth";
import {connect} from "react-redux";

const {Content} = Layout;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userKey: '',
        }
    }

    handleOnUserKeyChange = (event) => {
        this.setState({userKey: event.target.value});
    }

    handleEmitEmpty = () => {
        this.userKeyInput.focus();
        this.setState({ userKey: '' });
    }

    render() {
        const{userKey} = this.state;
        const suffix = userKey ? <Icon type="close-circle" onClick={this.handleEmitEmpty} /> : null;

        return (
            <BaseLayout style={{backgroundColor: "#F0F2F5"}}>
               <LoginHeader menuIndex={0} />
               <Row style={{padding: '0 50px', marginTop: 60}}>
                    <Col span={16} offset={4}>
                        <Content>
                            <Card style={{
                                padding: "10px 40px"
                            }}>
                                <h2>Log in to Forest Network</h2>
                                <Row>
                                    <Input
                                        style={{width: 400}}
                                        placeholder="Enter your key"
                                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        suffix={suffix}
                                        value={userKey}
                                        onChange={this.handleOnUserKeyChange}
                                        ref={node => this.userKeyInput = node}
                                    />
                                </Row>
                                <Row style={{marginTop: 5}}>
                                    <TweetButton type="primary" style={{width: 100}}
                                        clicked={() => this.props.authLogin({key: "ABCXYZ"})}
                                    >
                                        Log in
                                    </TweetButton>
                                </Row>
                                <Row>
                                    <Link to="#" onClick={() => console.log("Register")}>
                                        Or register an account ...
                                    </Link>
                                </Row>
                            </Card>
                        </Content>
                    </Col>
                </Row>
            </BaseLayout>
        );
    }
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {authLogin})(Login);