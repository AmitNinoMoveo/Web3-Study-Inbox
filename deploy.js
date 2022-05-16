const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const { abi, evm } = require("./compile");

// ===== Contract has been deployed =====
// Account used to deploy: 0x2c066033F96Eee67e8Af29DeDB2db0e0Ed20ee28
// Contract deployed at address: 0x3e2e72f26CA77248551FB6df8272e036e1E7Cd1a

const provider = new HDWalletProvider(
  'YOUR_MNEMONIC', // account mneumonic
  'YOUR_INFURA_URL' // infura api connection link
);

const web3 = new Web3(provider);

const initialMessage = "Contract Initialized";

(async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log(`Attempting to deploy from account: ${accounts[0]}`);

    const inboxContract = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments:[initialMessage]})
        .send({ gas: '1000000', from: accounts[0] });

    console.log(`Contract depoloyed to: ${inboxContract.options.address}`);
    provider.engine.stop();
})()