/**
 * SlowMath Library
 * Covalence, LLC
 */
let slowMath = (function () {
  const wait = (delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

  function add(a, b) {
    return wait(1000)
      .then(() => {
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (shouldResolve) {
          return Promise.resolve(+a + +b);
        } else {
          return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
        }
      });
  }

  function subtract(a, b) {
    return wait(1000)
      .then(() => {
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (shouldResolve) {
          return Promise.resolve(a - b);
        } else {
          return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
        }
      });
  }

  function multiply(a, b) {
    return wait(1000)
      .then(() => {
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (shouldResolve) {
          return Promise.resolve(a * b);
        } else {
          return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
        }
      });
  }

  function divide(a, b) {
    return wait(1000)
      .then(() => {
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (+b === 0) {
          return Promise.reject(new Error("Cannot divide by zero."));
        } else if (shouldResolve) {
          return Promise.resolve(a / b);
        } else {
          return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
        }
      });
  }

  function remainder(a, b) {
    return wait(1000)
      .then(() => {
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (+b === 0) {
          return Promise.reject(new Error("Cannot divide by zero for remainder."));
        } else if (shouldResolve) {
          return Promise.resolve(a % b);
        } else {
          return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
        }
      });
  }

  //*  I copied the remainder function and changed the IF statement to check for 'a' being positive, since 0 to any power is silly

  function exponent(a, b) {
    return wait(1000)
      .then(() => {
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (+a === 0) {
          return Promise.reject(new Error("Cannot raise 0 to a power."));
        } else if (shouldResolve) {
          return Promise.resolve(a ** b);
        } else {
          return Promise.reject(new Error(`Error raising ${a} to the power of ${b}.`));
        }
      });
  }

  //* Increment and Decrement were giving me unexpected errors.
  //* First, i tried just 'a++' in the resolve, but that did not give me a+1
  //* My next error occured when i tried to remove the first '.then' since the negative check is unnecessary, but it would not console log anything

  function increment(a) {
    return wait(1000)
      .then(() => {
        let b = 10;
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (shouldResolve) {
          return Promise.resolve(a + 1);
        } else {
          return Promise.reject(new Error(`Error incrementing ${a}.`));
        }
      });
  }

  function decrement(a) {
    return wait(1000)
      .then(() => {
        let b = 10;
        return negativeCheck(a, b);
      })
      .then((shouldResolve) => {
        if (shouldResolve) {
          return Promise.resolve(a - 1);
        } else {
          return Promise.reject(new Error(`Error decrementing ${a}.`));
        }
      });
  }

  function negativeCheck(a, b) {
    return a > -1 && b > -1;
  }

  return { add, subtract, multiply, divide, remainder, exponent, increment, decrement };
})();
