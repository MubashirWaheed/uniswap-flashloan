const { ethers } = require('hardhat');

async function main() {
  const SwapExample = await ethers.getContractFactory('UniswapV3SwapExamples');
  const swapExample = await SwapExample.deploy();

  await swapExample.deployed();
  console.log('flashLoan contract deployed at: ', swapExample.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
