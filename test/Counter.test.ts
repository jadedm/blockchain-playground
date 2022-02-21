import { expect } from 'chai';

import { deploy } from '../utils';

describe.skip('Counter contract', function () {
  it('Should increment the count', async function () {
    const counter = await deploy('Counter');
    await counter.incrementCount();

    expect(await counter.getCount()).to.equal(1);
  });
});