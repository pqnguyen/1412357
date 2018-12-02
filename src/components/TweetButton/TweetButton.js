import React from 'react';
import {Button} from 'antd';

const tweetButton = (props) => (
    <Button {...props} type="primary" style={{fontWeight:"bold", borderRadius:25}}>
        {props.children}
    </Button>
);

export default tweetButton;