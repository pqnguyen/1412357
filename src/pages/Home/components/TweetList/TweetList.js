import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import PersonalTweet from "src/containers/PersonalTweet/PersonalTweet";

class TweetList extends Component {
    render() {
        return (
            <Fragment>
                <PersonalTweet/>
                <PersonalTweet/>
            </Fragment>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(TweetList);