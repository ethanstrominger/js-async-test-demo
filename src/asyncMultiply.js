function multiply (a,b) {
    return new Promise ((resolve,reject) => {
        answer = a*b;
        resolve(answer);
    });
}