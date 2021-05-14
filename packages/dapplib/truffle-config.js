require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain horn install hen foam tent'; 
let testAccounts = [
"0x434e210d4529989f73029d1e006bfb1a82cf21427973f475116a47457bab3656",
"0x0f85bd03ae1538c88a57b2c46e7b3553a10d2410fdff4703ef58fd1b130eac88",
"0x059626949835d1804510ee82659d149df8f14f58a472726a5a8542a691435ed3",
"0x67eeb63c55d57c02d63bcb0574a7dc3351ed24fe98b6129a8665eb94dd48736a",
"0x060f5d24d22af9775b22c43e63f37463d1d76a1fb4ba33803b2c91350ff57f2f",
"0x45e204378c498f05a58f56126abbd273bf1cbc268334b980feacfcb4f60ba55b",
"0xd848dc0583918c7e08902477c7152291c121254afa38cd266737154d24ad074b",
"0x2091e9216ead613d7e74a069364e22f53f919e1f4dd9769fb86ad69494b296ef",
"0xbc927d63f93cedc41f4b849a67ca2933a4a24b329def8fae8cfb0b8dd2666996",
"0x794da775ff03fcea464923cd0f989f02878eee124e0199aa61251740dfdc5e56"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
