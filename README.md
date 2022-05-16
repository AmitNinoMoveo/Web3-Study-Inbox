# Inbox Smart Contract

This is a smart contract deployed on the Rinkeby Network, an Ethereum test network.
Created for learning purposes.

#### Learnt Technologies

- Solidity language: Basic smart contract.
- Web3.js library: Basic use and implementation, used for communicating with different networks (local & Rinkeby), Deployment of the smart contract and testing.
- Ganache library: Used for generating an ethereum blockchain network locally to deploy and test the smart contract in.
- Mocha library: Used for testing our compiled smart contract while deployed in the local network.
- truffle library: Used to compile the smart contract.
- Remix website: Used to test and deploy locally the smart contract all in the same place. Also canbe used to test published smart contract using your MetaMask wallet.
- Infura: Generated an API key to ease the communication with Rinkeby network nodes and deploy our smart contract to Rinkeby network.
- MetaMask crypto currency online hot wallet.

#### Contract Details

- Contract address: 0x3e2e72f26CA77248551FB6df8272e036e1E7Cd1a
- Deployed Account public key: 0x2c066033F96Eee67e8Af29DeDB2db0e0Ed20ee28

#### Available Actions:

- message(): A Call readonly method.
- setMessage(): A Send method, costs gas to use.

## See for yourself

Steps of validation:

1. Go to Etherscan website: rinkeby.etherscan.io
2. In the search input, enter the contract address given in above section.
3. See details in Transactions, Contract and Events tabs.


## Test for yourself

- Practice MetaMask wallet is required!, <b>Do not</b> play with a real wallet!
- MetaMask wallet has to contain a bit of eth in Rinkeby network to interact atleast 0.001 eth.

Steps for testing: 

1. Go to Remix website: remix.ethereum.org
2. Go to DEPLOY & RUN TRANSACTIONS tab.
3. At the Environment input select Injected Web3 (MetaMask wallet connection will be asked at prompt)
4. In the At Address input paste the contract's address.
5. Click on At Addrress button.
6. You can see a small tab appear bellow with the title: INBOX AT 0X3E2, click on it to open options for transactions.

## Run project

* Requires npm version ^7.20.x

Steps to use project:

1. Clone to your machine.
2. Open Terminal in project folder.
3. Run: npm i

### To locally test using Ganache:

Open Terminal in project folder and run: npm run test

### To deploy the contract:

- You have to have a an Infura api url to succesfully deploy the smart contract.
- In deploy.js file switch the account mnemonic to your own mnemonic.
- In deploy.js file switch the Infura url to the one you generated.
- Open Terminal in project folder and run: npm run deploy
