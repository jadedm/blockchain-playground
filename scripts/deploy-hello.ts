import { deploy } from '../utils/deploy';

async function run() {
  const helloWorldContract = await deploy('HelloWorld');

  return helloWorldContract;
}

async function hello(contract) {
  console.log('HelloWorld Contract: ', await contract.hello());
}

run()
  .then(hello);

// class Foo {
//   private bar: number;
//   foo() {
//     console.log('foo:', this.bar);
//   }
// }

// const foo = new Foo();
// foo.foo();
// foo.foo.call({
//   bar: 42
// })