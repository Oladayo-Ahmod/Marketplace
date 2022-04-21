pragma solidity >=0.4.21 <0.6.0;

contract Marketplace {
  string public name;
  // product count
  uint public products_count = 0;
  // create products mapping : key :value :name
  mapping(uint => Product) public products;
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

  // create product
  function create_product(string memory _name, uint _price) public{
    products_count ++; // increment product count
    products[products_count] = Product(products_count,_name,_price,'test',false); 
  }
}