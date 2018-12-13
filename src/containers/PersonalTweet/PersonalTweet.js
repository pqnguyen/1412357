import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Row, Col, Icon, Input} from "antd";
import moment from "moment";
import AvatarTweet from "src/components/AvatarTweet/AvatarTweet";
import Comment from "src/components/Comment/Comment";

import "./personalTweet.css";

class PersonalTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                author: {
                    id: "1",
                    name: "Phạm Khắc Quyền",
                    nickname: "@QuyenPhamKhac",
                    avatar: "https://pbs.twimg.com/profile_images/1069150269902966784/L24DeNKF_400x400.jpg",
                },
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt feugiat nisl eu porttitor. Nam pharetra augue vel odio finibus, nec ullamcorper enim feugiat.",
                createdAt: "2018-11-11",
                messages: [
                    {
                        creator: {
                            id: "1",
                            name: "Phạm Khắc Quyền",
                            nickname: "@QuyenPhamKhac",
                            avatar: "https://pbs.twimg.com/profile_images/1069150269902966784/L24DeNKF_400x400.jpg",
                        },
                        createdAt: "2018-11-12",
                        message: "The fuck",
                    },
                    {
                        creator: {
                            id: "1",
                            name: "Phạm Khắc Quyền",
                            nickname: "@QuyenPhamKhac",
                            avatar: "https://pbs.twimg.com/profile_images/1069150269902966784/L24DeNKF_400x400.jpg",
                        },
                        createdAt: "2018-11-12",
                        message: "Kimochiii",
                    }
                ],
                loves: 1,
            }
        }
    }
    

    render() {
        const{author, content, createdAt, messages, loves} = this.state.post;
        return (
            <Card
                loading={false}
                hoverable
                style={{marginBottom: 10}}
                bodyStyle={{paddingTop: 10, paddingBottom: 10, marginBottom: 5}}
            >
                <Row>
                    <Col span={3}>
                        <AvatarTweet 
                            size={40} 
                            src={author.avatar} 
                        />
                    </Col>
                    <Col span={21}>
                        <div className="stream-item-header">
                            <span className="account-name">{author.name}</span>
                            <span className="account-screen-name">{author.nickname}</span>
                            <span className="account-seperator"> . </span>
                            <span className="account-time">{moment(createdAt).fromNow()}</span>
                        </div>
                        <div className="js-tweet-text-container">
                            {content} <Icon type="edit" onClick={() => console.log("[edit]")}/>
                        </div>
                        <div className="stream-item-footer">
                            <span className="action-item" onClick={() => console.log("[comment]")}>
                                <Icon type="message"/> <b>{messages.length}</b>
                            </span>
                            <span className="action-item" onClick={() => console.log("[like]")}>
                                <Icon type="heart"/> <b>{loves}</b>
                            </span>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row style={{marginTop: 10}}>
                    {messages.map((msg, idx) => (
                        <Comment message={msg} key={idx} />
                    ))}
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col span={2} offset={1} style={{display: "flex", justifyContent: "flex-end", paddingRight: 10}}>
                        <AvatarTweet 
                            size={30} 
                            src={author.avatar} 
                        />
                    </Col>
                    <Col span={21}>
                        <Input />
                    </Col>
                </Row>
            </Card>
        );
    }

}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(PersonalTweet);