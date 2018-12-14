import axios from 'axios';
import {accountAPI} from '../configs/api';

export default {
    getAccountInfo: ({publicKey}) => axios.get(`${accountAPI.ACCOUNT_GET_INFO}?publicKey=${publicKey}`),
    createNewAccount: (params) => axios.post(`${accountAPI.ACCOUNT_CREATE_NEW}`, params),
}
