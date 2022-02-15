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
 * })
 * !-------------------
 *
 * repeating units are inside a try-catch block to account for any errors that may be thrown
 */

// try {
//   slowMath
//     .add(1, 1) // Add together 6 and 2
//     .then((result) => {
//       console.log(`log the result of adding 6 and 2 (8) = ${result}`); //log the result of adding 6 and 2 - gives 8
//       return slowMath.multiply(result, 2); // and then multiply the result by 2.
//     })
//     .then((result) => {
//       console.log(`log the result of multiplying by 2 (16) = ${result}`); // log the result of multiplying by 2 - gives 16
//       return slowMath.divide(result, 4); // and then divide the result by 4
//     })
//     .then((result) => {
//       console.log(`log the result of dividing by 4 (4) = ${result}`); // log the result of dividing by 4 - gives 4
//       return slowMath.subtract(result, 3); // and then subtract 3 from the result
//     })
//     .then((result) => {
//       console.log(`log the result of subtracting 3 (1) = ${result}`); // log the result of subtracting 3 - gives 1
//       return slowMath.add(result, 98); // and then add 98 to the result
//     })
//     .then((result) => {
//       console.log(`log the result of adding 98 (99) = ${result}`); // log the result of adding 98 - gives 1
//       return slowMath.remainder(result, 2); // and then find the remainder from dividing the result by 2
//     })
//     .then((result) => {
//       console.log(`log the result of finding the remainder from dividing by 2 (1) = ${result}`); // log the result of remainder from dividing the result by 2 - gives 1
//       return slowMath.multiply(result, 50); // and then multiply the result by 50.
//     })
//     .then((result) => {
//       console.log(`log the result of multiplying by 50 (50) = ${result}`); // log the result of multiplying by 50 - gives 50
//       return slowMath.remainder(result, 40); // and then find the remainder after dividing by 40.
//     })
//     .then((result) => {
//       console.log(`log the result of finding the remainder from dividing by 40 (10) = ${result}`); // log the result of finding the remainder from dividing by 40 - gives 10
//       return slowMath.add(result, 32); // and then add 32 to the result.
//     })
//     .then((result) => {
//       console.log(`The final result is: ${result}!!`); // final result - gives 42
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// } catch (error) {
//   console.log(error);
// }

// async function doMath() {
//   try {
//     let result1 = await slowMath.add(6, 2);
//     console.log(result1);
//     let result2 = await slowMath.multiply(result1, 2);
//     console.log(result2);
//     let result3 = await slowMath.divide(result2, 4);
//     console.log(result3);
//     let result4 = await slowMath.subtract(result3, 3);
//     console.log(result4);
//     let result5 = await slowMath.add(result4, 98);
//     console.log(result5);
//     let result6 = await slowMath.remainder(result5, 2);
//     console.log(result6);
//     let result7 = await slowMath.multiply(result6, 50);
//     console.log(result7);
//     let result8 = await slowMath.remainder(result7, 40);
//     console.log(result8);
//     let result9 = await slowMath.add(result8, 32);
//     console.log(result9);
//   } catch (error) {}
// }

// doMath();

// async function doMath2() {
//   try {
//     let result1 = await slowMath.exponent(2, 3);
//     console.log(result1);
//     let result2 = await slowMath.exponent(result1, 2);
//     console.log(result2);
//     let result3 = await slowMath.increment(result2);
//     console.log(result3);
//     let result4 = await slowMath.increment(result3);
//     console.log(result4);
//     let result5 = await slowMath.decrement(result4);
//     console.log(result5);
//     let result6 = await slowMath.exponent(result5, 2);
//     console.log(result6);
//   } catch (error) {}
// }

// doMath2();
