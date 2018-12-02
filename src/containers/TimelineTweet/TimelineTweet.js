import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Row, Col, Input} from "antd";

import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";
import IconButton from "src/components/IconButton/IconButton";
import TweetButton from 'src/components/TweetButton/TweetButton';

import {iconMenuItems} from 'src/constants/menuItems';

import "./timelineTweet.css";

const {TextArea} = Input;

class TimelineTweet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandInput: false,
        }
    }

    handleExpandingInput = () => {
        const {expandInput} = this.state;
        this.setState({expandInput: !expandInput});
    }

    render() {
        const { expandInput } = this.state;
        return (
            <Card
                style={{
                    backgroundColor: "#E8F5FD",
                }}
                bodyStyle={{
                    paddingTop: 10,
                    paddingBottom: 10,
                }}
            >
                <Row>
                    <Col span={3}>
                        <AvatarTweet size={35}/>
                    </Col>
                    <Col span={21}>
                        <TextArea style={{resize: "none"}}
                            className="tweet-input"
                            placeholder="What's happening?" 
                            rows={expandInput ? 3 : 1}
                            onFocus={this.handleExpandingInput}
                            onBlur={this.handleExpandingInput}
                        />
                    </Col>
                </Row>
                {expandInput && (
                    <Row style={{
                        paddingTop: 10,
                    }}>
                        <Col offset={3} span={18}>
                            {iconMenuItems.map((item, idx) => (
                                <IconButton type={item.type} style={{
                                    fontSize: 25,
                                    color: "#1DA1F2",
                                }}/>
                            ))}
                        </Col>
                        <Col>
                            <TweetButton>
                                Tweet
                            </TweetButton>
                        </Col>
                    </Row>
                )}
            </Card>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(TimelineTweet);