import React, {Component} from "react";
import {connect} from "react-redux";
import {Row, Col} from "antd";

import DashboardProfileCard from "src/containers/DashboardProfileCard/DashboardProfileCard";
import TimelineTweet from "src/containers/TimelineTweet/TimelineTweet";
import Content from "src/layout/Main/components/Content/Content";

import TweetList from "./components/TweetList/TweetList";

class Home extends Component {
    render() {
        return (
            <Content>
                <Row>
                    <Col span={6}>{<DashboardProfileCard/>}</Col>
                    <Col span={12}>
                        <TimelineTweet/>
                        <TweetList/>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </Content>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(Home);