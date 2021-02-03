const PToken = artifacts.require("./PToken.sol");

module.exports = function (deployer) {
  deployer.deploy(PToken);
};
