import Web3 from "web3"

var ethclient = new Web3(Web3.givenProvider || "ws://localhost:7545"); //Setup for standard, local Ganache ports

export default ethclient