import { expect } from 'chai';
import { ethers } from 'hardhat';
import { deploy } from '../utils';

describe('Hero contract', function () {
  let hero;
  before(async function () {
    hero = await deploy('TestHero');
  });

  it.skip('should get a zero hero array', async function () {
    expect(await hero.getHeroes()).to.deep.equal([]);
  });

  it.skip('should fail at creating hero cause of payment', async function () {
    let e;

    try {
      await hero.createHero(0, {
        value: ethers.utils.parseEther("0.04999999")
      });
    } catch (error) {
      e = error;
    }

    expect(e.message.includes('please send more ether')).to.equal(true);
  });

  it("should create a hero and test predictable randomness", async function () {
    await hero.setRandom(69);
    await hero.createHero(0, {
      value: ethers.utils.parseEther("0.05")
    });
    const h = (await hero.getHeroes())[0];

    // [ S , H , D , I , M ]
    // [ S , H , D , I]
    // [ S , I , D ]
    expect(await hero.getMagic(h)).to.equal(16);
    expect(await hero.getHealth(h)).to.equal(2);
  });

  // it('generates a random number', async function () {
  //     console.log(await hero.generateRandom() % 5);
  // });

});