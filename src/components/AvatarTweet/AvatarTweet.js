import React, {Component} from "react";
import PropTypes from "prop-types";
import {Avatar} from "antd";

import "./avatarTweet.css";

class AvatarTweet extends Component {
    static propTypes = {
        size: PropTypes.number,
        src: PropTypes.string
    };

    static defaultProps = {
        size: 55
    };

    render() {
        if (this.props.src) {
            return <Avatar src={this.props.src}/>;
        } else {
            return <Avatar size={this.props.size} icon="user"/>;
        }
    }
}

export default AvatarTweet;