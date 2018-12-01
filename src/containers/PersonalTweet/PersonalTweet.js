import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Row, Col, Avatar, Icon} from "antd";

import "./personalTweet.css";

class PersonalTweet extends Component {
    render() {
        const [name, screenName, time] = ["Nguyen", "@Nguyen25598353", "11m11"];
        return (
            <Card
                hoverable
                bodyStyle={{paddingTop: 10, paddingBottom: 10}}
            >
                <Row>
                    <Col span={4}>
                        <Avatar size={64} icon="user"/>
                    </Col>
                    <Col span={20}>
                        <div className="stream-item-header">
                            <span className="account-name">{name}</span>
                            <span className="account-screen-name">{screenName}</span>
                            <span className="account-seperator"> . </span>
                            <span className="account-time">{time}</span>
                        </div>
                        <div className="js-tweet-text-container">
                            Just for test
                        </div>
                        <div className="stream-item-footer">
                            <span className="action-item">
                                <Icon type="message"/> 3.9K
                            </span>
                            <span className="action-item">
                                <Icon type="retweet"/> 57K
                            </span>
                            <span className="action-item">
                                <Icon type="heart"/> 283K
                            </span>
                            <span className="action-item">
                                <Icon type="bar-chart"/>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }

}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(PersonalTweet);