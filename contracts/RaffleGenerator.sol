//SPDX-License-Identifier: Unlicense
pragma solidity ^ 0.8 .0;
import "./Raffle.sol";
contract RaffleGenerator {


    struct raffle {
        uint index;
        address manager;
    }

    mapping(address => raffle) totalRaffles;
    address[] public raffles;


    function CreateRaffle(uint _maxNumbers, uint _price, uint _numbersBuyed, string memory _name) public payable {
        address newRaffle = new Raffle(_maxNumbers,_price,_numbersBuyed,_name);
        totalRaffles[newRaffle].index = raffles.push(newRaffle);
        totalRaffles[newRaffle].manager = msg.sender;

        RaffleCreated(newRaffle);
    }

    function getRaffles() public view returns(address[]){
        return raffles;
    }
    //EVents
    event RaffleCreated(address raffleAddres);


}