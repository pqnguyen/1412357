import axios from 'axios';
import {transferAPI} from '../configs/api';

export default {
    transferByAddress: ({reception, amount}) => axios.post(`${transferAPI.TRANSFER_BY_ADDRESS}`, {reception, amount}),
}
