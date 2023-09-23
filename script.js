// complete the js code
class CustomPromise {
  constructor() {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    this.onFinallyCallback = null;
  }

  resolve(value) {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.value = value;
      this.onFulfilledCallbacks.forEach(callback => callback(this.value));
      if (this.onFinallyCallback) {
        this.onFinallyCallback();
      }
    }
  }

  reject(reason) {
    if (this.state === 'pending') {
      this.state = 'rejected';
      this.reason = reason;
      this.onRejectedCallbacks.forEach(callback => callback(this.reason));
      if (this.onFinallyCallback) {
        this.onFinallyCallback();
      }
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.state === 'rejected') {
      onRejected(this.reason);
    } else {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    return this;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    this.onFinallyCallback = onFinally;
    return this;
  }
}

// Example usage:
const customPromise = new CustomPromise();

customPromise
  .then(value => {
    console.log('Fulfilled:', value);
  })
  .catch(reason => {
    console.log('Rejected:', reason);
  })
  .finally(() => {
    console.log('Finally block executed.');
  });

customPromise.resolve('Hello, world!');
// Output:
// Fulfilled: Hello, world!
// Finally block executed.

// Or in case of rejection:
// customPromise.reject('Something went wrong.');
// Output:
// Rejected: Something went wrong.
// Finally block executed.


window.CustomPromise = CustomPromise;
