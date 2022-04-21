const MarketPlace = artifacts.require('./Marketplace.sol');

contract(MarketPlace, (accounts)=>{
    let marketplace;

    before(async ()=>{
        marketplace = await MarketPlace.deployed()
    })
})