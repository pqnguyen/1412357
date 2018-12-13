import React, { Component } from 'react';
import moment from 'moment';
import {Avatar,Col} from "antd";

import "./comment.css";

class Comment extends Component {
    render() {
        const {message} = this.props;
        const {creator} = message;
        return (
            <Col span={23} offset={1} style={{marginBottom: 10}}>
                <Col span={2} style={{display: "flex", justifyContent: "flex-end", paddingRight: 10}}>
                    <Avatar 
                        size={30} 
                        src={creator.avatar}
                    />
                </Col>
                <Col span={22}>
                    <div className="stream-item-header">
                        <span className="account-name">{creator.name}</span>
                        <span className="account-screen-name">{creator.nickname}</span>
                        <span className="account-seperator"> . </span>
                        <span className="account-time">{moment(creator.createdAt).fromNow()}</span>
                    </div>
                    <div className="js-comment-text-container">
                       {message.message}
                    </div>
                </Col>
            </Col>
        );
    }
}

export default Comment;