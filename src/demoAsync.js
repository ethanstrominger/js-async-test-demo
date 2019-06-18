import multiply from './asyncMultiply';
function printTimeElapsed(startTime, message = 'Time elapsed') {
  let endTime = new Date().getTime();
  console.log(message + ' time elapsed:', endTime - startTime + 'ms\n');
}
async function demoNoAwait() {
  let startTime = new Date().getTime();
  let x = multiply(3, 4);
  console.log('Without await: 3 * 4 = ', x);
  printTimeElapsed(startTime, 'No await');
}

async function demoThreeAwaits() {
  let startTime = new Date().getTime();
  let product1 = await multiply(3, 4);
  let product2 = await multiply(5, 6);
  let product3 = await multiply(32, 14);
  let sum = product1 + product2 + product3;
  console.log('Sum of three awaits:', sum);
  printTimeElapsed(startTime, 'Three awaits');
}

function sumArray(array) {
  return array.reduce((accumulator, current) => accumulator + current, 0);
}

async function demoThreePromises() {
  let startTime = new Date().getTime();
  let productPromise1 = multiply(3, 4);
  let productPromise2 = multiply(5, 6);
  let productPromise3 = multiply(32, 14);
  let sum = await Promise.all([
    productPromise1,
    productPromise2,
    productPromise3
  ]).then(function(values) {
    return sumArray(values);
  });
  console.log('Sum of three promises:', sum);

  printTimeElapsed(startTime, 'Three promises');
}
demoNoAwait();
demoThreeAwaits();
demoThreePromises();
