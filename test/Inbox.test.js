const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

// Here, we create an instance of Web3 and as a parameter we input a
// provider as a "communicator" with ganache's local testing enviroment.
// the provider can be changed from project to project or between different evironments.
const web3 = new Web3(ganache.provider());

// Here, we get the compiled smart contract written in solidity, inbox.sol file.
// ** For learning purposes, try to understand what data do the variables ( abi, evm ) we pass from the copiled file.
const { abi, evm } = require('../compile');

const initialMessage = 'Hi There!';
let accounts;
let inbox;
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //Use one of those accounts to deploy the contract.
  //  1. We generate the contract according to the interface injected.
  inbox = await new web3.eth.Contract(abi)
  //  2. We generate a request to deploy the contract while passing the whole contract data compiled as bytecode, 
  //    - Also the arguments required by the contract's constructor function.
    .deploy({ 
      data: evm.bytecode.object,
      arguments: [initialMessage]})
  // 3. We send the request to the blockchain as a transaction without a recipient.
  //    - If a tranaction is sent to the blockchain that has no signed recipient, it is registered as a smart contract on the blockchain.
    .send({ from: accounts[0], gas: '1000000' });
});

describe("Inbox Contract", () => {
  it("Contract deployed", () => {
    // This approves that the contract has been deployed successfully.
    // receiving the contract's address from the Blockchain's response validates us.
    assert.ok(inbox.options.address);
  });

  it("Has initial message", async ()=>{
    const message = await inbox.methods.message().call();
    assert.equal(message, initialMessage);
  })
  
  it("Able to set message value", async ()=>{
    const newValue = "Test Successful";
    await inbox.methods.setMessage(newValue).send({ from: accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message, newValue);
  })
});