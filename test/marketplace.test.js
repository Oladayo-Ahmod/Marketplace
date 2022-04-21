const MarketPlace = artifacts.require('./Marketplace.sol');

contract('MarketPlace', (accounts)=>{
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
    decribe('product', async () =>{
        let result,productCount
        before(async () =>{
            result = await marketplace.create_product()
        })
        it('creates product', async () =>{
            assert.equal(productCount,1)
        })
    })
})