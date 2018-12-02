import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Row, Col, Input, Icon} from "antd";

import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";

import "./timelineTweet.css";

const {TextArea} = Input;

class TimelineTweet extends Component {
    render() {
        return (
            <Card
                style={{
                    backgroundColor: "#E8F5FD"
                }}
            >
                <Row>
                    <Col span={3}>
                        <AvatarTweet size={35}/>
                    </Col>
                    <Col span={21}>
                        <TextArea style={{
                            resize: "none"
                        }} placeholder="What's happening?" autosize={{ minRows: 3}}/>
                    </Col>
                </Row>
                <Row>
                    <Col offset={3}>
                        <Icon type="picture" />
                    </Col>
                </Row>
            </Card>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(TimelineTweet);