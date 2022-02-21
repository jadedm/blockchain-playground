import '@nomiclabs/hardhat-ethers';

import { ethers } from 'hardhat';

async function deploy(contractName) {
  const Contract = await ethers.getContractFactory(contractName);
  const contract = await Contract.deploy();
  await contract.deployed();

  return contract;
}

export { deploy }