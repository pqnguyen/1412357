import React, { Component } from 'react';
import {Card,Avatar,Row,Col} from "antd";

const { Meta } = Card;


class ProfileFollowing extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card
                            cover={<img style={{height:150,}} alt="example" src="https://pbs.twimg.com/profile_banners/3001165942/1446202117/1500x500" />}
                        >
                            <Meta
                                avatar={<Avatar src="https://pbs.twimg.com/profile_images/652478352020914176/8tdT4efM_bigger.png" />}
                                title="Revue"
                                description="@Revue"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProfileFollowing;