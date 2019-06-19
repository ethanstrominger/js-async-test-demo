import libraryAsyncMultiply from './libraryAsyncMultiply';
import libraryCallbackMultiplier from './libraryCallbackMultiplier';

function printTimeElapsed(startTime, message = 'Time elapsed') {
  const endTime = new Date().getTime();
  console.log(message + ' time elapsed:', endTime - startTime + 'ms\n');
}

async function demoNoAwait() {
  const startTime = new Date().getTime();
  const x = libraryAsyncMultiply(3, 4);
  console.log('Without await: 3 * 4 = ', x);
  printTimeElapsed(startTime, 'No await');
}

async function demoThreeAwaits() {
  const startTime = new Date().getTime();
  const product1 = await libraryAsyncMultiply(3, 4);
  const product2 = await libraryAsyncMultiply(5, 6);
  const product3 = await libraryAsyncMultiply(32, 14);
  const sum = product1 + product2 + product3;
  console.log('Sum of three awaits:', sum);
  printTimeElapsed(startTime, 'Three awaits');
}

function demoCallBacks() {
  const startTime = new Date().getTime();
  let sum = 0;
  libraryCallbackMultiplier(3, 4, result1 => {
    sum = sum + result1;
    libraryCallbackMultiplier(5, 6, function(result2) {
      sum = sum + result2;
      libraryCallbackMultiplier(32, 14, function(result3) {
        sum = sum + result3;
        console.log('Sum of call backs:', sum);
        printTimeElapsed(startTime, 'Call backs');
      });
    });
  });
}

async function demoCallBackPromise() {
  async function multiplierCallbackPromise(a, b) {
    return new Promise(function(resolve, reject) {
      libraryCallbackMultiplier(a, b, resolve);
    });
  }

  const startTime = new Date().getTime();
  const productPromise1 = multiplierCallbackPromise(3, 4);
  const productPromise2 = multiplierCallbackPromise(5, 6);
  const productPromise3 = multiplierCallbackPromise(32, 14);
  const sum = await Promise.all([
    productPromise1,
    productPromise2,
    productPromise3
  ]).then(function(values) {
    return values[0] + values[1] + values[2];
  });
  console.log('Sum of call back converted to promise', sum);
  printTimeElapsed(startTime, 'Call back converted to promise');
}

async function demoThreePromises() {
  const startTime = new Date().getTime();
  const productPromise1 = libraryAsyncMultiply(3, 4);
  const productPromise2 = libraryAsyncMultiply(5, 6);
  const productPromise3 = libraryAsyncMultiply(32, 14);
  const sum = await Promise.all([
    productPromise1,
    productPromise2,
    productPromise3
  ]).then(function(values) {
    return values[0] + values[1] + values[2];
  });
  console.log('Sum of three promises:', sum);

  printTimeElapsed(startTime, 'Three promises');
}
demoNoAwait();
demoThreeAwaits();
demoThreePromises();
demoCallBacks();
demoCallBackPromise();
