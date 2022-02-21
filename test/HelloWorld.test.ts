import { expect } from 'chai';
import { deploy } from '../utils';

describe.skip('HelloWorld Contract', function () {
  it('Should return Hello, World!', async function () {
    const hello = await deploy('HelloWorld');

    expect(await hello.hello()).to.equal('Hello, World!');
  })
})