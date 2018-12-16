import transaction from 'src/client/lib/transaction';
import {key} from 'src/configs/key.js';

const defaultVersion = 1;

const TransactionType = {
    PAYMENT: 'payment',
    POST: 'post',
    UPDATE_ACCOUNT: 'update_account',
    CREATE_ACCOUNT: 'create_account'
};

const getSequenceTx = () => {
    // Use publicKey to get Last sequence from server
    const sequence = 1;

    return sequence;
};

const getBaseTx = (operation) => {
    const sequence = getSequenceTx();

    return {
        operation,
        version: defaultVersion,
        account: key.publicKey,
        sequence: sequence + 1,
        memo: Buffer.alloc(0)
    };
};

const payment = (reception, amount) => {
    const crawTx = {
        ...getBaseTx(TransactionType.PAYMENT),
        params: {
            address: reception,
            amount: amount
        }
    };

    transaction.sign(crawTx, key.secretKey);
    return transaction.encode(crawTx).toString('hex');
};


const createAccount = (publicKey) => {
    const crawTx = {
        ...getBaseTx(TransactionType.CREATE_ACCOUNT),
        params: {
            address: publicKey
        }
    };

    transaction.sign(crawTx, key.secretKey);
    return transaction.encode(crawTx).toString('hex');
};

const updateAccount = () => {
    const crawTx = {
        ...getBaseTx(TransactionType.UPDATE_ACCOUNT),
    };
    return transaction.encode(crawTx).toString('hex');
};

const post = () => {
    const crawTx = {
        ...getBaseTx(TransactionType.POST),
    };
    return transaction.encode(crawTx).toString('hex');
};

const decode = (data) => {
    data = new Buffer(data, 'base64');
    return transaction.decode(data);
};

export default {
    payment,
    createAccount,
    updateAccount,
    post,
    decode,
    TransactionType
};