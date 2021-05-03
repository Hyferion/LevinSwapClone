const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function(deployer, network) {
  let weth;
  const FACTORY_ADDRESS = '0xdc6BDa84057bD8eeE5b480954543C2B57d525565';

  if(network === 'mainnet') {
    weth = await WETH.at('')
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
}
