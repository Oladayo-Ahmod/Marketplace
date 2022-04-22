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
    address payable owner;
    bool purchased;
  }
  
  // create product creation event
  event product_created(
    uint id,
    string name,
    uint price,
    address payable owner,
    bool purchased
  );

  // purchase product event
  event product_purchased(
    uint id,
    string name,
    uint price,
    address payable owner,
    bool purchased
  );

  constructor() public {
    name = "Market Place";
  }

  // create product
  function create_product(string memory _name, uint _price) public{ // state variable
    // validation
    require(bytes(_name).length > 0); // required
    require(_price > 0); // required 
    products_count++; // increment product count
    // create product
    products[products_count] = Product(products_count,_name,_price,msg.sender,false); 
    // trigger event
    emit product_created(products_count,_name,_price,msg.sender,false);
  }
}

  //  purchase product
  function purchaseproduct(uint _id) public payable {
    // fetch product
    Product memory _product = products[_id];
    //  fetch owner or buyer
    address payable _seller = _product.owner;
    // transfer ownership from seller to buyer
    _product.owner = msg.sender;
    // mark as purchased
    _product.purchased = true;
    // update the product
    products[_id] = _product; 
    // pay the seller
    address (_seller).transfer(msg.value);

    emit(product_purchased(products_count,_name,_price,msg.sender,false));

  }