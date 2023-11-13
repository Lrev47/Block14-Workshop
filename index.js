// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1, 2, 3, 4, 5,"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

console.log(stringArray)

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}



// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  console.log(numbers.length)
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
console.log("*************************")

/*
creating an empty variable that i will change later -- sum
for - looping through the array
      let i - 0 is setting index to 0 (the beginning of the array)
      i < numbers.length is saying if the value of i is less than the number of 
      data in the array, it will execute the code below.
      i ++ is shorthand for add 1 which happened everytime the code is executed.
      { sum += numbers[i]; is taking the variable sum which has a value of 0 , and then adding 
      the number of the element in the array, += is short hand for sum plus the current value of the array
    }
*/

function getSum(numbers){ 
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum)
  // TODO
}

/*
Adding the sum of the array like i did in the last block, going to take that sum and
divide it by the length of the array and store than value in a variable called meanNum and 
then cosole.log it to check it's correct.
*/
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let meanNum = 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
   meanNum = (sum / numbers.length);
   console.log(meanNum)
  }
/**
 Iterating through the numbers
 IF the element of the array is less than the value set to my variable imnNUm
 I will set that value as my minNum value.
 console log the value to check. 
 */

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  minNum = 1
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum){
      minNum = numbers[i];
    }  
    console.log(minNum);
  }}
  
  // TODO
/**
 * Max was easy, just did the inverse of min
 * Needed move console.log(maxNum) out of funtion because it was longging each iteration.
 */
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  maxNum = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum){
      maxNum = numbers[i];
    }  
  }
  console.log(maxNum);
  // TODO
}


console.log("BREAK")


/**
 * Im taking the min and the max nums, and then finding the difference.
 * storing it in a variable called range, and console longging it to be sure.
 * 
 */
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  minNum = 1
  maxNum = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum){
      minNum = numbers[i];}
    if (numbers[i] > maxNum){
        maxNum = numbers[i];
    }}
    let range = maxNum - minNum;

    console.log(range)
    
  // TODO
}




/**
 * 
 * If number has a leftover of 0 after being divided by 2, it's an even number.
 */
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  for(let i = 0; i < numbers.length; i++){
    if ([i] % 2 === 0){
      console.log([i])
    }
  }
  // TODO
}


/** all the same code as previous code block, but not equal to 0 instead of equal to 0 */
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  for(let i = 0; i < numbers.length; i++){
    if ([i] % 2 != 0){
      console.log([i])
    }
  }
}
