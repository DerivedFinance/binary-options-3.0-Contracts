const FixedProductMarketMakerFactory = artifacts.require("FixedProductMarketMakerFactory");
// const FixedProductMarketMaker = artifacts.require("FixedProductMarketMaker");

module.exports = function(deployer) {
  // deployer.link(Fixed192x64Math, FixedProductMarketMakerFactory);
  // deployer.link(Fixed192x64Math, FixedProductMarketMaker);
  deployer.deploy(FixedProductMarketMakerFactory);
};
