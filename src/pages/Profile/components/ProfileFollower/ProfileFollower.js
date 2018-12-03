import React, { Component } from 'react';
import {Card,Avatar,Row,Col} from "antd";

const { Meta } = Card;


class ProfileFollower extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card
                            cover={<img style={{height:150,}} alt="example" src="https://pbs.twimg.com/profile_banners/602657017/1454191340/1500x500" />}
                        >
                            <Meta
                                avatar={<Avatar src="https://pbs.twimg.com/profile_images/690713817945214977/4chGQEu4_400x400.jpg" />}
                                title="Falcoon"
                                description="@falcoon_master"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProfileFollower;