//153. Write a JavaScript program to reverse the order of characters in the string.
const reverseString = str => 
    [...str].reverse().join('');
  
console.log(reverseString('adelmo')); 
console.log(reverseString('buric'));

//19. Write a JavaScript function that returns array elements larger than a number.
function biggerElements(val) {
    return function(value, index, array) {
       return (value >= val);
    };
}
let result = [1,2,3,4,5,6,7,8,9].filter(biggerElements(5));
console.log(result);

//264. Write a JavaScript program to capitalize the first letter of every word in a string.
const capitalizeEveryWord = str =>
    str.replace(/\b[a-z]/g, char => char.toUpperCase());
console.log(capitalizeEveryWord('adelmo buric'));

//215. Write a JavaScript program to get all the elements of an array except the last one.
const initial = arr => arr.slice(0, -1);
console.log(initial([1,2,3,4,5])); 

//213. Write a JavaScript program to initialize and fill an array with the specified values.
const initializeArrayWithValues = (num, value = 0) => Array(num).fill(value);
console.log(initializeArrayWithValues(5, 2));
console.log(initializeArrayWithValues(4, 0));