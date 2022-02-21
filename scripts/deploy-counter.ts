import { deploy } from '../utils/deploy';

async function run() {
  const counterContract = deploy('Counter');

  return counterContract;
}

async function increment(contract) {
  contract.incrementCount();
}

run()
  .then(increment);