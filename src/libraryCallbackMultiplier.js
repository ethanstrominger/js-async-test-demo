function callbackMultiplier(a, b, cb) {
  setTimeout(() => cb(a * b), 500);
}
export default callbackMultiplier;
