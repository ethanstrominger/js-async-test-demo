function asyncMultiply(a, b, timeout = 500) {
  return new Promise((resolve, reject) => {
    // console.log('before timeout function call', a, b);
    setTimeout(() => {
      //   console.log('first line in timeout', a, b);
      let answer = a * b;
      //   console.log('before resolve', a, b);
      resolve(answer);
      //   console.log('after resolve within timeout', a, b);
    }, timeout);
    // console.log('after timeout function call', a, b);
  });
}

export default asyncMultiply;
