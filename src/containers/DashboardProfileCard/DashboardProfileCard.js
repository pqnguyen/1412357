import React, {Component} from "react";
import {connect} from "react-redux";
import {Card} from "antd";

import "./dashboardProfileCard.css";

class DashboardProfileCard extends Component {
    render() {
        const [name, screenName, tweets, following, followers] = ["Nguyen", "@Nguyen25598353", 1, 3, 2];

        const cover = <img alt="example"
            src="https://watermarked.cutcaster.com/cutcaster-photo-800910916-Beautiful-female-hands-with-water.jpg"
            style={{height: 95}}/>;
        return (
            <div>
                <Card
                    hoverable
                    cover={cover}
                    style={{width: 300}}
                >
                    <div className="DashboardProfileCard-userFields account-group">
                        <p className="DashboardProfileCard-name u-textTruncate">{name}</p>
                        <p className="DashboardProfileCard-screenname u-inlineBlock u-dir">{screenName}</p>
                    </div>

                    <div className="controls avatar-settings inline-upload-avatar dropdown center">
                        <span className="DashboardProfileCard-avatarLink u-inlineBlock">
                            <div className="DashboardProfileCard-avatarImage u-bgUserColor">
                            </div>
                        </span>
                    </div>

                    <div className="ProfileCardStats">
                        <ul className="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal">
                            <li className="ProfileCardStats-stat Arrange-sizeFit">
                                <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip"
                                   href="/" data-element-term="following_stats"
                                   data-original-title="3 Following">
                                    <span className="ProfileCardStats-statLabel u-block">Tweets</span>
                                    <span className="ProfileCardStats-statValue" data-count="3" data-is-compact="false">
                                        {tweets}
                                    </span>
                                </a>
                            </li>
                            <li className="ProfileCardStats-stat Arrange-sizeFit">
                                <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip"
                                   href="/" data-element-term="tweet_stats"
                                   data-original-title="0 Tweets">
                                    <span className="ProfileCardStats-statLabel u-block">Following</span>
                                    <span className="ProfileCardStats-statValue" data-count="0" data-is-compact="false">
                                        {following}
                                    </span>
                                </a>
                            </li>
                            <li className="ProfileCardStats-stat Arrange-sizeFit">
                                <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip"
                                   href="/" data-element-term="following_stats"
                                   data-original-title="3 Following">
                                    <span className="ProfileCardStats-statLabel u-block">Followers</span>
                                    <span className="ProfileCardStats-statValue" data-count="3" data-is-compact="false">
                                        {followers}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(DashboardProfileCard);