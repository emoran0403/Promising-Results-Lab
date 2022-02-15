/**
 *? Add together 6 and 2.
 *? Wait on the result, log it, and then multiply the result by 2.
 *? Wait on the result, log it, and then divide the result by 4.
 *? Wait on the result, log it, and then subtract 3 from the result.
 *? Wait on the result, log it, and then add 98 to the result.
 *? Wait on the result, log it, and then find the remainder from dividing the result by 2.
 *? Wait on the result, log it, and then multiply the result by 50.
 *? Wait on the result, log it, and then find the remainder from dividing the result by 40.
 *? Wait on the result, log it, and then add 32 to the result.
 *? Wait on the result, and then log: The final result is ___, where you fill in the blank with the final result.
 */

/**
 * slowmath.method(a,b) - first function call
 *
 * !this is the repeating unit
 * .then((result) = > { //? gets the result and passes it along
 * console.log(result) //? logs the result
 * return slowmath.method(result, c) //? returns the next function call.  doing this allows us to avoid the pyramid of doom
 * }).catch((error) => { //? catches any error from the previous step
 *  console.log(error); //? logs that error
 * })
 * !-------------------
 */

slowMath
  .add(6, 2) // Add together 6 and 2
  .then((result) => {
    console.log(`log the result of adding 6 and 2 (8) = ${result}`); //log the result of adding 6 and 2 - gives 8
    return slowMath.multiply(result, 2); // and then multiply the result by 2.
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of multiplying by 2 (16) = ${result}`); // log the result of multiplying by 2 - gives 16
    return slowMath.divide(result, 4); // and then divide the result by 4
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of dividing by 4 (4) = ${result}`); // log the result of dividing by 4 - gives 4
    return slowMath.subtract(result, 3); // and then subtract 3 from the result
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of subtracting 3 (1) = ${result}`); // log the result of subtracting 3 - gives 1
    return slowMath.add(result, 98); // and then add 98 to the result
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of adding 98 (99) = ${result}`); // log the result of adding 98 - gives 1
    return slowMath.remainder(result, 2); // and then find the remainder from dividing the result by 2
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of finding the remainder from dividing by 2 (1) = ${result}`); // log the result of remainder from dividing the result by 2 - gives 1
    return slowMath.multiply(result, 50); // and then multiply the result by 50.
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of multiplying by 50 (50) = ${result}`); // log the result of multiplying by 50 - gives 50
    return slowMath.remainder(result, 40); // and then find the remainder after dividing by 40.
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`log the result of finding the remainder from dividing by 40 (10) = ${result}`); // log the result of finding the remainder from dividing by 40 - gives 10
    return slowMath.add(result, 32); // and then add 32 to the result.
  })
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(`The final result is: ${result}!!`); // final result - gives 42
  });
