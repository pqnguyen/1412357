import React, {Component} from 'react';
import {Button} from "antd";
import action from "src/client/blockchain/actions";
import {key} from 'src/configs/key.js';

class Test extends Component {
    handleAction = () => {
        action.transferMoney(key.publicKey, key.publicKey, 12);
    };

    render() {
        return (
            <Button style={{marginTop: 300}} onClick={this.handleAction}>Test</Button>
        );
    }
}

export default Test;