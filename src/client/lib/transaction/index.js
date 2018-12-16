import vstruct from 'varstruct';
import crypto from 'crypto';
import {Keypair} from 'stellar-base';
import v1 from './v1';

const Transaction = vstruct([
    {name: 'version', type: vstruct.UInt8},
]);

function encode(tx) {
    switch (tx.version) {
        case 1:
            return v1.encode(tx);

        default:
            throw Error('Unsupport version');
    }
}

function decode(data) {
    const versionTx = Transaction.decode(data);
    switch (versionTx.version) {
        case 1:
            return v1.decode(data);

        default:
            throw Error('Unsupport version');
    }
}

function getUnsignedHash(tx) {
    return crypto
        .createHash('sha256')
        .update(encode({
            ...tx,
            signature: Buffer.alloc(64, 0),
        }))
        .digest();
}

function sign(tx, secret) {
    const key = Keypair.fromSecret(secret);
    tx.signature = key.sign(getUnsignedHash(tx));
}

function verify(tx) {
    const key = Keypair.fromPublicKey(tx.account);
    return key.verify(getUnsignedHash(tx), tx.signature);
}

function hash(tx) {
    return tx.hash = crypto.createHash('sha256')
        .update(encode(tx))
        .digest()
        .slice(0, 20)
        .toString('hex')
        .toUpperCase();
}

export default {
    encode,
    decode,
    verify,
    sign,
    hash
};
