## Code

```javascript
// main.js
import { isPrime, isDivisibleBy, getRange } from './math';// Run our main function to write to filesystem  

getRange(0, 500).forEach((number) => {  
  if (isPrime(number)) {  
    // "FizzBuzz++" to filesystem  
  } else if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {  
    // "FizzBuzz" to filesystem  
  } else if (isDivisibleBy(number, 3)) {  
    // "Fizz" to filesystem  
  } else if (isDivisibleBy(number, 5)) {  
    // "Buzz" to filesystem  
  }  
});

// math.js

math.js/**  
 * Checks to see if a number is a prime number  
 *   
 * @param {number} num - Number we are checking to see if it's prime  
 * @returns {boolean}  
 */  
export const isPrime = (num) => {  
    for(let i = 2; i < num; i++) {  
        if (num % i === 0) return false;  
    }      
    return num > 1;  
};/**  
 * Checks to see if a number can be divided by another number  
 *   
 * @param {number} numerator - Number we are checking it's divisability**  
 * @param {number} denominator - Number we want to divide by  
 *  @returns {boolean}  
 */  
export const isDivisibleBy = (numerator, denominator) => {  
    return numerator % denominator == 0;  
};/**  
 * Returns an array of all numbers between a min & max  
 *   
 * @returns {number[]}  
 */  
const getRange = (min, max) => {  
    const numList = [];  
    for (let index = min; index < max; index++) {  
      numList.push(index);  
    }  
    return numList;  
};
```

   


