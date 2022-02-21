import { deploy } from '../utils/deploy';

describe.skip('GasReporter', function () {
  it('Should return gas reports', async function () {
    const gasReporter = await deploy('GasReporter');

    for (let index = 0; index < 10; index++) {
      await gasReporter.report1();
      await gasReporter.report2();
      await gasReporter.report3();
      await gasReporter.report4();
      await gasReporter.report5();
    }
  });
});