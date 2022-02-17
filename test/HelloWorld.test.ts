import '@nomiclabs/hardhat-ethers';

import { ethers } from "hardhat";
import { expect } from 'chai';

describe('HelloWorld Contract', function () {
  it('Should return Hello, World!', async function () {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal('Hello, World!');
  })
})