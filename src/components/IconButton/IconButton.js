import React from "react";
import {Icon} from 'antd';

const iconButton = (props) => (
    <Icon 
        type={props.type} 
        size={props.size} 
        style={Object.assign({}, props.style, {
            padding: "5px 12px 0 12px"
        }) }
        onClick={props.clicked}
    />
);

export default iconButton;  