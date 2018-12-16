const transaction = require('../lib/transaction');
const secretKey = "SAHOVEVVJFR4U3OW4SOAMZLJHLGL4XWNEC2E3G5MJXERUK322H7WQOIR";
const publicKey = "GBNZQNZLN4JGF3NBJ6L5VSBF4G2TDX337T5FJJRLZT2QACL7MSWTUGEA";

//encode
const encode = () => {
    let crawTx = {
        version: 1,
        operation: 'payment',
        params: {
            address: "GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO",
            amount: 1
        },
        account: publicKey,
        sequence: 4,
        memo: Buffer.alloc(0)
    };

    transaction.sign(crawTx, secretKey);
    let hashTx = transaction.encode(crawTx).toString('hex');
    console.log(hashTx);
};

encode();


//decode
let data = "ATDAiIpf3GPVpvYGkRgtGB1oo3J4iaurGfGX1pDi7q3jPaXCAAAAAAAAAAsAAgArMFuYNytvEmLtoU+X2sgl4bUx33v8+lSmK8z1AAl/ZK06GIAAAAAAAAAAAbyMLPg8Khv2ENyrYyZqxYAc1tdzhCYFFQSA4nM62QRGtXgpeYdpbw0eHfU83604IhFJRO7wSTYXp8KfZNl4hw4=";

const decode = (data) => {
    data = new Buffer(data, 'base64');
    let tx = transaction.decode(data);
    console.log('tx', tx);
};
// decode(data);