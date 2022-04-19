//SPDX-License-Identifier: Unlicense
pragma solidity ^ 0.8 .0;

contract Raffle {
    uint public maxNumbers;
    string public name;
    uint public price;
    uint public maxWinners;
    bool public isLive;
    address public creator;
    address public winner;


    struct buyer {
        string buyerName;
        uint entry;
        uint index;
    }

    //Constructor
    function NewRaffle (uint _maxNumbers, uint _price, uint _numbersBuyed, string memory _name) public {
        maxNumbers = _maxNumbers;
        name = _name;
        price = _price;
        creator = msg.sender;
    }

    mapping(address => buyer) buyers;
    address[] public buyersIndex;



    function AddParticipant(uint _numbersBuyed) public payable allowEntry {
        buyers[msg.sender].index = buyersIndex.push(msg.sender);
        for (uint i = 0; i < _numbersBuyed; i++) {
            buyers.push(msg.sender);
        }

        ParticipantAdded(buyers[msg.sender].name, buyers[msg.sender].entry);
    }

    function RaffleLive() public onlyManager {
        isLive = true;
    }

    function getBuyers() public view returns(address[]) {
        return buyersIndex;
    }
    //Modifiers
    modifier allowEntry {
        require(buyers[msg.sender].entry < maxNumbers);
        require(msg.value == price * 1 ether);
        require(isLive == true);
        _;
    }

    modifier onlyManager() {
        require(msg.sender == creator);
        _;
    }

    //Main events
    event ParticipantAdded(string name, uint entry);
}