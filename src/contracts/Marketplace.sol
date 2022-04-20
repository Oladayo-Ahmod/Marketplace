pragma solidity >=0.4.21 <0.6.0;

contract Marketplace {
  string public name;

  // create product data
  struct Product{
    uint id;
    string name;
    uint price;
    string owner;
    bool purchased;
  }

  constructor() public {
    name = "Market Place";
  }
}