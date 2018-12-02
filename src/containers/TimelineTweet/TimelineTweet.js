import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Row, Col, Input, Icon, Button} from "antd";

import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";
import IconButton from "src/components/IconButton/IconButton";

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
                            <IconButton type="picture" style={{
                                fontSize: 25,
                                color: "#1DA1F2",
                            }} />
                            <IconButton type="paper-clip" style={{
                                fontSize: 25,
                                color: "#1DA1F2",
                            }} />
                            <IconButton type="bar-chart" style={{
                                fontSize: 25,
                                color: "#1DA1F2",
                            }} />
                            <IconButton type="environment" style={{
                                fontSize: 25,
                                color: "#1DA1F2",
                            }} />
                        </Col>
                        <Col>
                            <Button type="primary" style={{fontWeight:"bold", borderRadius:25}}>
                                Tweet
                            </Button>
                        </Col>
                    </Row>
                )}
            </Card>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(TimelineTweet);