const { assert } = require("chai");

const MarketPlace = artifacts.require('./Marketplace.sol');

// import chai for validation
// require('chai')
// .use(require('chai-as-promised')).should();

contract('MarketPlace', ([deployer,seller,buyer])=>{
    let marketplace;

    before(async ()=>{
        marketplace = await MarketPlace.deployed()
    })
    
    // test deployment
    describe('deployment', async () =>{
        it('deployed successfully', async () =>{
            let address = await MarketPlace.address;
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,undefined)
            assert.notEqual(address,null)
        })
        it('has a valid name', async () =>{
            const name = await marketplace.name();
            assert.equal(name,'Market Place')
        })
         
    })

    // test product
    describe('product', async () =>{
        let result,productCount
        before(async () =>{
            result = await marketplace.create_product('Iphone XR',web3.utils.toWei('1','Ether'),{
                from : seller,
            })
            productCount = await marketplace.products_count()
        })
        it('creates product', async () =>{
            assert.equal(productCount,1)
           const event = result.logs[0].args
           assert.equal(event.id.toNumber(),productCount,'id is correct')
           assert.equal(event.name,'Iphone XR','name is correct')
           assert.equal(event.owner,seller,'seller is correct')
        //    assert.equal(event.price,'10','id is correct')
           assert.equal(event.purchased,false,'purchased is correct')
        })

        // test for failure
        //    await await marketplace.create_product('',web3.utils.toWei('1','Ether'),{from : seller}).should.be.rejected;

        // test for listing products
        it('it lists product', async () =>{
            const product = await marketplace.products(productCount)
            assert.equal(product.id.toNumber(),productCount,'id is correct')
            assert.equal(product.name,'Iphone XR','name is correct')
            assert.equal(product.owner,seller,'seller is correct')
        //    assert.equal(product.price,'10','id is correct')
            assert.equal(product.purchased,false,'purchased is correct')  
        })
        
        // test for product purchase
        it('it purchases product', async () =>{
            // tracks seller old balance
            let oldSellerBalance;
            oldSellerBalance = await web3.eth.getBalance(seller)
            oldSellerBalance = new web3.utils.BN(oldSellerBalance)

            result = await marketplace.purchaseProduct(productCount,{from : buyer,value :web3.utils.toWei('1','Ether')})
           const event = result.logs[0].args
           assert.equal(event.id.toNumber(),productCount,'id is correct')
           assert.equal(event.name,'Iphone XR','name is correct')
           assert.equal(event.owner,buyer,'seller is correct')
           assert.equal(event.price,'1000000000000000000','price is correct')
           assert.equal(event.purchased,true,'purchased is correct')

            //    check if seller receives funds
            let newSellerBalance;
            newSellerBalance = await web3.eth.getBalance(seller)
            newSellerBalance = new web3.utils.BN(newSellerBalance)

            let price
            price = await web3.utils.toWei('1','Ether')
            price = new web3.utils.BN(price)

            const expectedBal = oldSellerBalance.add(price)
            assert.equal(expectedBal.toString(),newSellerBalance.toString())
            // console.log(oldSellerBalance, newSellerBalance, price)
        })
    })
})