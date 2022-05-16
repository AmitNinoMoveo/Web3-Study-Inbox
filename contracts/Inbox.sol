// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Inbox{

    // ===== STORAGE  =====

    string public message;

    // ===== INIT =====

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // ===== METHODS =====

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}