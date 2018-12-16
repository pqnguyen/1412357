import fetch from 'node-fetch';
import Transaction from 'src/client/blockchain/Transaction.js';


const transferMoney = async (sender, reception, amount) => {
    const hashedTx = Transaction.payment(reception, amount);
    const response = await fetch(`https://komodo.forest.network/broadcast_tx_commit?tx=0x${hashedTx}`);

    return await response.json();
};

const createAccount = async (publicKey) => {
    const hashedTx = Transaction.createAccount(publicKey);
    const response = await fetch(`https://komodo.forest.network/broadcast_tx_commit?tx=0x${hashedTx}`);

    return await response.json();
};

export default {
    transferMoney,
    createAccount,
};
