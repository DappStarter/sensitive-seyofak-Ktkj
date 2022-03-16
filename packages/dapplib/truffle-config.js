require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purpose grace slice sunset season'; 
let testAccounts = [
"0x84f5be461b3d49285b7fceee90c371fbcf3e934ec9e22441cd9d49a0987f9873",
"0xf4768e8e8665dd9e64b2a022094636c7d6dc15478a4d8a050bb3be37ffd10992",
"0xa81eddd5a8148a9d60b7d22060456a7d50bfec813e8303e2302c96e07ebb91d5",
"0x88e342f0d9e3d1c2f153598e3cbcf3b5fb2ce3d295f109f23d669e3df0cd04d8",
"0x8a7cddf95e5a0efa604c1e337f547243491152a0c4eb6ce186727a5b49dbc225",
"0x5b1cba8e88ec004fb745e3d0f71cc990147727c62c3cdec636e5d6f29bca9667",
"0x682fa0cd5d21f156b9108257c87a197123edaaa41ea90f7556d832c756a4678c",
"0xf2199a70418aec568b4ef2f7f19cf98b1eebcb4386f4fdadd568e04c6b44642a",
"0xcdad1ea7f33be46cc849e640f578e39ae41f9eea607cfd66dde08d5d1b10668e",
"0x4c87d695051f0705c1ec3b6d6af6e6935e7d77f75e4cb0ea8ec0b50b5418f253"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

