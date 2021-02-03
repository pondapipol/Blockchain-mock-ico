const _deploy_contracts = require("../migrations/2_deploy_contracts");

var PToken = artifacts.require("./PToken.sol");

contract('PToken', function(accounts) {

    it('sets the total supply upon deployment', function() {
        return PToken.deployed().then(function(instance) {
            tokenInstance = instance
            return tokenInstance.totalSupply();

        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 9000000, 'sets the total supply to 1,000,000')
        })
    })
})