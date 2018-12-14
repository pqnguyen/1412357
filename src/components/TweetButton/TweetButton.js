import React from 'react';
import {Button} from 'antd';

const tweetButton = (props) => (
    <Button type={props.type} size={props.size} onClick={props.clicked} style={Object.assign({}, {fontWeight:"bold", borderRadius:25}, props.style)}>
        {props.children}
    </Button>
);

export default tweetButton;