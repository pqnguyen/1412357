import React, { Component } from 'react';
import TweetList from "../../../Home/components/TweetList/TweetList";
import TimelineTweet from "src/containers/TimelineTweet/TimelineTweet";

class ProfileTweet extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <TimelineTweet />
                <TweetList />
            </React.Fragment>
        );
    }
}

export default ProfileTweet;