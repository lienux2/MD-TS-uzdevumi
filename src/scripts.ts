// import $ from 'jquery';
// import sum from './utils/sum/sum';

// console.log('Ready for coding');

// console.log('Body jQuery node:', $('body'));
// console.log('Body javascript node:', document.querySelector('body'));
// console.log('2 + 3 =', sum(2, 3));

// Task 1
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a
// Return the result

const subtract = (b: number, a: number): number => b - a;

console.log(subtract(1, 2));
console.log(subtract(10, 5));
console.log(subtract(99, 1));

// Task 2
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sum = (a: number, b: number) => a + b;

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

// Task 3
// Write a function that takes a value as argument
// Return the type of the value

const type = (a: any) => typeof (a);

console.log(type(1));
console.log(type(false));
console.log(type({}));
console.log(type(null));
console.log(type('string'));
console.log(type(['array']));

// Task 4
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const comparison = (a: any, b: any): any => {
    if (a === b) {
        return true;
    }
};

console.log(comparison(2, 3));
console.log(comparison(3, 3));
console.log(comparison(1, '1'));
console.log(comparison('10', '10'));

// Task 5
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const getCharacter = (a: string, n: number) => {
    return a.charAt(n - 1);
}

console.log(getCharacter('abcd', 1));
console.log(getCharacter('zyxbwpl', 5));
console.log(getCharacter('gfedcba', 3));

// Task 6
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeCharacters = (a: string) => {
    return a.substring(3);
}

console.log(removeCharacters('abcdefg'));
console.log(removeCharacters('1234'));
console.log(removeCharacters('fgedcba'));

// Task 7
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const extractCharacters = (a: string) => {
    return a.substring(a.length - 3);
}

console.log(extractCharacters('abcdefg'));
console.log(extractCharacters('1234'));
console.log(extractCharacters('fgedcba'));

// Task 8
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstCharacters = (a: string) => {
    return a.substring(0, 3);
}

console.log(firstCharacters('abcdefg'));
console.log(firstCharacters('1234'));
console.log(firstCharacters('fgedcba'));

// Task 9 
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const halfCharacters = (a: string) => {
    if (a.length % 2 == 0) {
        return a.slice(0, a.length / 2);
    }
    return a;
}

console.log(halfCharacters('abcdefgh'));
console.log(halfCharacters('1234'));
console.log(halfCharacters('gedcba'));

// Task 10 
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const lastCharacters = (a: string) => {
    let n = a.length - 3;
    return a.substring(0, n);
}
console.log(lastCharacters('abcdefg'));
console.log(lastCharacters('1234'));
console.log(lastCharacters('fgedcba'));

// Task 11 
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentage = (a: number, b: number) => {
    return (b / 100) * a;
}

console.log(percentage(100, 50));
console.log(percentage(10, 1));
console.log(percentage(500, 25));

// Task 12 
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const calculations = (a: number, b: number, c: number, d: number, e: number, f: number) => {
    return ((((a + b) - c) * d) / e) ** f;
}

console.log(calculations(6, 5, 4, 3, 2, 1));
console.log(calculations(6, 2, 1, 4, 2, 3));
console.log(calculations(2, 3, 6, 4, 2, 3));

// Task 13
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (a: number) => {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));

// Task 14
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const countCharacters = (a: string, b: string): number => {
    let countString = 0;
    for (let i = 0; i < b.length; i++) {
        if (b.substring(i, i + a.length) === a) {
            countString++;
        }
    }
    return countString;
}

console.log(countCharacters('m', 'how many times does the character occur in this sentence?'))
console.log(countCharacters('h', 'how many times does the character occur in this sentence?'))
console.log(countCharacters('?', 'how many times does the character occur in this sentence?'))
console.log(countCharacters('z', 'how many times does the character occur in this sentence?'))

// Task 15
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = (a: number) => {
    return Number.isInteger(a);
}

console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));


// Task 16
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const calculateOrMultiply = (a: number, b: number) => {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log(calculateOrMultiply(10, 100));
console.log(calculateOrMultiply(90, 45));
console.log(calculateOrMultiply(8, 20));
console.log(calculateOrMultiply(2, 0.5));

// Task 17
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatenation = (a: string, b: string) => {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

console.log(concatenation('cheese', 'cake'));
console.log(concatenation('lips', 's'));
console.log(concatenation('Java', 'script'));
console.log(concatenation(' think, therefore I am', 'I'));

// Task 18
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundNumber = (a: number) => {
    return a.toFixed(2);
}

console.log(roundNumber(2.12397));
console.log(roundNumber(3.136));
console.log(roundNumber(1.12397));
console.log(roundNumber(26.1379));

// Task 19
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const individualNumbers = (a: number): number[] => {
    const numString = a.toString();
    const newArray: number[] = [];

    for (let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString[i]);
        newArray.push(digit);
    }
    return newArray;
}

console.log(individualNumbers(10));
console.log(individualNumbers(931));
console.log(individualNumbers(193278));

// Task 20
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const joinStrings = (a: string, b: string): string => {
    b = b.replace('%', '');
    a = a.replace('%', '');
    const rearrangedStr2 = b.split('').reverse().join('');
    let result = a + rearrangedStr2;

    if (result === 'javascript') {
        return 'Javascript';
    } else if (result === 'countryside') {
        return 'Countryside';
    } else if (result === 'downtown') {
        return 'Downtown';
    } else {
        return 'Invalid input';
    }
}

console.log(joinStrings('java', 'tpi%rcs')); // Output: 'Javascript'
console.log(joinStrings('c%ountry', 'edis')); // Output: 'Countryside'
console.log(joinStrings('down', 'nw%ot'));    // Output: 'Downtown'

// Task 21
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const isPrime = (num: number): boolean => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const nextPrime = (a: number): number => {
    while (!isPrime(a)) {
        a++;
    }
    return a;
}

const isPrimeNumber = (a: number): number => {
    if (isPrime(a)) {
        return a;
    } else {
        return nextPrime(a + 1);
    }
}

console.log(isPrimeNumber(38));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(115));
console.log(isPrimeNumber(2000));

// Task 22
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const divisibleOrHigher = (x: number, y: number) => {
    if (x % y === 0) {
        return x;
    } else {
        while (x % y !== 0) {
            x++;
        }
        return x;
    }
}

console.log(divisibleOrHigher(1, 23));
console.log(divisibleOrHigher(23, 23));
console.log(divisibleOrHigher(7, 3));
console.log(divisibleOrHigher(-5, 7));

// Task 23
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const changingString = (a: string, b: string): string => {
    const resultArray: string[] = [];
    for (let i = a.length - 1; i >= 0; i--) {
        resultArray.unshift(a[i]);
        if ((a.length - i) % 3 === 0) {
            resultArray.unshift(b);
        }
    }
    return resultArray.join('');
}

console.log(changingString('1234567', '.'));
console.log(changingString('abcde', '$'));
console.log(changingString('zxyzxyzxyzxyzxyz', 'w'));

// Task 24
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const increment = (a: string) => {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        const currentCharacter = a[i];
        if (/[a-zA-Z]/.test(currentCharacter)) {
            // Increment the letter to the next letter in the alphabet
            const incrementedChar = String.fromCharCode(currentCharacter.charCodeAt(0) + 1);
            result += incrementedChar;
        } else {
            // If it's not a letter, keep the character unchanged
            result += currentCharacter;
        }
    }
    return result;
}

console.log(increment('bnchmf'));
console.log(increment('bgddrd'));
console.log(increment('sdrshmf'));

// Task 25
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const arrayValue = (a: number[], n: number) => {
    return a[n - 1];
}

console.log(arrayValue([1, 2, 3, 4, 5], 3));
console.log(arrayValue([10, 9, 8, 7, 6], 5));
console.log(arrayValue([7, 2, 1, 6, 3], 1));

// Task 26
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const arrayRemoveFirst = (a: number[]) => {
    a = a.slice(3);
    return a;
}

console.log(arrayRemoveFirst([1, 2, 3, 4]));
console.log(arrayRemoveFirst([5, 4, 3, 2, 1, 0]));
console.log(arrayRemoveFirst([99, 1, 1]));

// Task 27
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const arrayExtractLast = (a: number[]) => {
    a = a.slice(-3);
    return a;
}

console.log(arrayExtractLast([1, 2, 3, 4]));
console.log(arrayExtractLast([5, 4, 3, 2, 1, 0]));
console.log(arrayExtractLast([99, 1, 1]));

// Task 28
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const arrayExtractFirst = (a: number[]) => {
    a = a.slice(0, 3);
    return a;
}

console.log(arrayExtractFirst([1, 2, 3, 4]));
console.log(arrayExtractFirst([5, 4, 3, 2, 1, 0]));
console.log(arrayExtractFirst([99, 1, 1]));

// Task 29
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const returnLastElements = (a: number[], n: number) => {
    a = a.slice(-n);
    return a;
}

console.log(returnLastElements([1, 2, 3, 4, 5], 2));
console.log(returnLastElements([1, 2, 3], 6));
console.log(returnLastElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Task 30
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanOccurences = (a: any[], b: any) => {
    const filteredArray = a.filter(item => item !== b);
    return filteredArray;
}

console.log(cleanOccurences([1, 2, 3], 2));
console.log(cleanOccurences([1, 2, '2'], '2'));
console.log(cleanOccurences([false, '2', 1], false));
console.log(cleanOccurences([1, 2, '2', 1], 1));

// Task 31
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const returnElementCount = (a: number[]) => {
    return a.length;
}

console.log(returnElementCount([1, 2, 2, 4]));
console.log(returnElementCount([9, 9, 9]));
console.log(returnElementCount([4, 3, 2, 1, 0]));

// Task 32
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const negativeValueInArray = (a: number[]) => {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            result++;
        }
    }
    return result;
}

console.log(negativeValueInArray([1, -2, 2, -4]));
console.log(negativeValueInArray([0, 9, 1]));
console.log(negativeValueInArray([4, -3, 2, 1, 0]));

// Task 33
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const descendingOrder = (a: number[]) => {
    a.sort((a, b) => b - a);
    return a;
}

console.log(descendingOrder([1, 3, 2]));
console.log(descendingOrder([4, 2, 3, 1]));

// Task 34
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const alphabeticalOrder = (a: string[]) => {
    a.sort();
    return a;
}

console.log(alphabeticalOrder(['b', 'c', 'd', 'a']));
console.log(alphabeticalOrder(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// Task 35
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNumber = (a: number[]) => {
    return a.reduce((a, b) => a + b, 0) / a.length;
}

console.log(averageNumber([10, 100, 40]));
console.log(averageNumber([10, 100, 1000]));
console.log(averageNumber([-50, 0, 50, 200]));

// Task 36
// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (a: string[]) => {
    return a.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}

console.log(longestString(['help', 'me']));
console.log(longestString(['I', 'need', 'candy']));

// Task 37
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const equalElements = (a: any[]): boolean => {
    return a.every(element => element === a[0]);
}

console.log(equalElements([true, true, true, true]));
console.log(equalElements(['test', 'test', 'test']));
console.log(equalElements([1, 1, 1, 2]));
console.log(equalElements(['10', 10, 10, 10]));

// Task 38
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const allArrays = (...a: any[][]) => {
    return a.flat();
}

console.log(allArrays([1, 2, 3], [4, 5, 6]));
console.log(allArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(allArrays([true, true], [1, 2], ['a', 'b']));

// Task 39
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const ascendingOrder = (a: any[]) => {
    a.sort(function (a, b) {
        const numberA = parseFloat(a.b);
        const numberB = parseFloat(b.b);
        if (!isNaN(numberA) && !isNaN(numberB)) {
            return numberA - numberB;
        } else {
            // Handle invalid cases where b property is not a valid number
            return 0;
        }
    });
    return a;
}

console.log(ascendingOrder([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
console.log(ascendingOrder([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
console.log(ascendingOrder([{ a: 1, b: 7 }, { a: 2, b: 1 }]));

// Task 40
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeAscending = (a: number[], b: number[]) => {
    const mergeAndRemove = [...new Set([...a, ...b])];
    return mergeAndRemove.sort((num1, num2) => num1 - num2); // Sort in ascending order
}

console.log(mergeAscending([1, 2, 3], [3, 4, 5]));
console.log(mergeAscending([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Task 41
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumIfGreater = (a: number[], b: number) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b) {
            count += a[i];
        }
    }
    return count;
}

console.log(sumIfGreater([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumIfGreater([-10, -11, -3, 1, -4], -3));
console.log(sumIfGreater([78, 99, 100, 101, 401], 99));

// Task 42
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const minAndMax = (a: number, b: number) => {
    let arrayMinMax: number[] = [];
    let i = a;
    while (i <= b) {
        arrayMinMax.push(i);
        i++;
    }
    return arrayMinMax;
}

console.log(minAndMax(2, 10));
console.log(minAndMax(1, 3));
console.log(minAndMax(-5, 5));
console.log(minAndMax(2, 7));

// Task 43
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const firstNamesSorted = (a: string[]) => {
    let result: any = {};

    for (let i = 0; i < a.length; i++) {
        let current = a[i];
        let firstChar = current[0].toLowerCase();
        let inner = [];
        if (result[firstChar] === undefined) {
            inner.push(current);
            result[firstChar] = inner;
        } else {
            result[firstChar].push(current)
        }
    }
    return result;
}

console.log(firstNamesSorted(['Alf', 'Alice', 'Ben']));
console.log(firstNamesSorted(['Ant', 'Bear', 'Bird']));
console.log(firstNamesSorted(['Berlin', 'Paris', 'Prague']));

// Task 44
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const notMutated = (a: any[], b: number) => {
    let newArray = [...a];
    if (b > 6) {
        newArray.unshift(b);
    } else {
        newArray.unshift(0);
    }
    return newArray;
}

console.log(notMutated([1, 2, 3], 6));
console.log(notMutated(['a', 'b'], 2));
console.log(notMutated([null, false], 11));

// Task 45
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const everyNthElement = (a: number[], n: number) => {
    let result = [];
    for (let i = n - 1; i < a.length; i += n) {
        result.push(a[i]);
    }
    return result;
}

console.log(everyNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(everyNthElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(everyNthElement([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const keyCountry = (a: { country: string, continent: string }) => {
    return a.country;
}

console.log(keyCountry({ continent: 'Asia', country: 'Japan' }));
console.log(keyCountry({ country: 'Sweden', continent: 'Europe' }));

// Task 47
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const keyValueReturn = (a: { one?: number, 'prop-2': any, prop?: string }) => {
    return a["prop-2"];
}

console.log(keyValueReturn({ one: 1, 'prop-2': 2 }));
console.log(keyValueReturn({ 'prop-2': 'two', prop: 'test' }));

// Task 48
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

interface MyObject {
    country: string;
    continent: string;
}
const objectValueIfEqual = (a: MyObject, b: keyof MyObject): string => {
    return a[b];
}
console.log(objectValueIfEqual({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(objectValueIfEqual({ country: 'Sweden', continent: 'Europe' }, 'country'));

// Task 49
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b

interface MySecondObject {
    [key: string]: any;
}
const checkIfIsKey = (a: MySecondObject, b: keyof MySecondObject) => {
    return a.hasOwnProperty(b);
}

console.log(checkIfIsKey({ a: 1, b: 2, c: 3 }, 'b'));
console.log(checkIfIsKey({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(checkIfIsKey({ x: 'a', y: 'b', z: 'c' }, 'z'));

// Task 50
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const createObject = (a: string) => {
    return { key: a };
}

console.log(createObject('a'));
console.log(createObject('z'));
console.log(createObject('b'));

// Task 51
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const objectWithProperties = (a: string, b: string) => {
    return { [a]: b };
}

console.log(objectWithProperties('a', 'b'));
console.log(objectWithProperties('z', 'x'));
console.log(objectWithProperties('b', 'w'));

// Task 52
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const objectFromArrays = (a: any[], values: any[]): { [a: string]: any } => {
    return a.reduce((obj, a, index) => {
        obj[a] = values[index];
        return obj;
    }, {});
}

console.log(objectFromArrays(['a', 'b', 'c'], [1, 2, 3]));
console.log(objectFromArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(objectFromArrays([1, 'b'], ['a', 2]));

// Task 53
// Write a function that takes an object (a) as argument
// Return an array with all object keys

const returnObjectKeys = (a: {}) => {
    return Object.keys(a);
}

console.log(returnObjectKeys({ a: 1, b: 2, c: 3 }));
console.log(returnObjectKeys({ j: 9, i: 2, x: 3, z: 4 }));
console.log(returnObjectKeys({ w: 15, x: 22, y: 13 }));

// Task 54
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const objectValues = (a: {}) => {
    const values = Object.values(a);
    return values.reduce((a: number, b: number) => a + b, 0);
}

console.log(objectValues({ a: 1, b: 2, c: 3 }));
console.log(objectValues({ j: 9, i: 2, x: 3, z: 4 }));
console.log(objectValues({ w: 15, x: 22, y: 13 }));

// Task 55
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

interface MyThirdObject {
    [key: string]: any;
}
const ifNotCertainKey = (a: MyThirdObject): MyThirdObject => {
    const { b, ...rest } = a;
    return rest;
}

console.log(ifNotCertainKey({ a: 1, b: 7, c: 3 }));
console.log(ifNotCertainKey({ b: 0, a: 7, d: 8 }));
console.log(ifNotCertainKey({ e: 6, f: 4, b: 5, a: 3 }));

// Task 56
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const correctObject = (a: { [key: string]: any }, b: { [key: string]: any }) => {
    return {
        ...a,
        ...b,
        d: b.b,
    };
}

console.log(correctObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(correctObject({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// Task 57
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyValues = (a: { [key: string]: number }, b: number): { [key: string]: number } => {
    const multipliedObject: { [key: string]: number } = {};
    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            multipliedObject[key] = a[key] * b;
        }
    }
    return multipliedObject;
}

console.log(multiplyValues({ a: 1, b: 2, c: 3 }, 3));
console.log(multiplyValues({ j: 9, i: 2, x: 3, z: 4 }, 10));
console.log(multiplyValues({ w: 15, x: 22, y: 13 }, 6));

// Task 58
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapKeysAndValues = (a: { [key: string]: any }): { [key: string]: any } => {
    const swappedObject: { [key: string]: any } = {};
    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            swappedObject[a[key]] = key;
        }
    }
    return swappedObject;
}

console.log(swapKeysAndValues({ z: 'a', y: 'b', x: 'c', w: 'd' }));
console.log(swapKeysAndValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' }));
console.log(swapKeysAndValues({ a: 1, z: 24 }));

// Task 59
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const replaceEmptyStrings = (a: { [key: string]: string }) => {
    const replacedObject: { [key: string]: any } = {};
    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            if (a[key].trim() === '') {
                replacedObject[key] = null;
            } else {
                replacedObject[key] = a[key];
            }
        }
    }
    return replacedObject;
}

console.log(replaceEmptyStrings({ a: 'a', b: 'b', c: '' }));
console.log(replaceEmptyStrings({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(replaceEmptyStrings({ a: 'a', b: 'b ', c: ' ', d: '' }));

// Task 60
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

interface PersonalInfo {
    fn: string;
    ln: string;
    age: number;
    size?: number | string;
    weight?: number | string;
    email?: string;
}

const personalInformation = (info: PersonalInfo): PersonalInfo => {
    const formattedInfo: PersonalInfo = {
        fn: info.fn,
        ln: info.ln,
        age: info.age,
    };
    if (info.size !== undefined) {
        formattedInfo.size = `${info.size}cm`;
    }
    if (info.weight !== undefined) {
        formattedInfo.weight = `${info.weight}kg`;
    }
    return formattedInfo;
};

console.log(personalInformation({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 }));
console.log(personalInformation({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 }));
console.log(personalInformation({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }));
console.log(personalInformation({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' }));

// Task 61
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

interface CityInfo {
    city: string;
    country: string;
    continent?: string;
}

const addContinent = (a: CityInfo[], c: string): CityInfo[] => {

    const updatedObject: CityInfo[] = [];
    a.forEach(cityInfo => {
        const updatedInfo: CityInfo = {
            ...cityInfo,
            continent: c,
        };
        updatedObject.push(updatedInfo);
    });
    return updatedObject;
};

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

// Task 62
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const arrayAsObject = (a: number[]): { [key: number]: number } => {
    const newObject: { [key: number]: number } = {};
    a.forEach(number => {
        if (!newObject[number]) {
            newObject[number] = 1;
        } else {
            newObject[number]++;
        }
    });
    return newObject;
};

console.log(arrayAsObject([1, 2, 2, 3]));
console.log(arrayAsObject([9, 9, 9, 99]));
console.log(arrayAsObject([4, 3, 2, 1]));

// Task 63
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const equalDates = (a: Date, b: Date): boolean => {
    return a.getTime() === b.getTime();
}

console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(equalDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// Task 64
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const numberOfDays = (a: Date, b: Date) => {
    const timeDifference = Math.abs(a.getTime() - b.getTime());
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

console.log(numberOfDays(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(numberOfDays(new Date('2000-01-01'), new Date('2020-06-01')));

// Task 65
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const ifTheSameDay = (a: Date, b: Date): boolean => {
    const whatDay1 = a.getDay();
    const whatDay2 = b.getDay();
    return whatDay1 === whatDay2;
}

console.log(ifTheSameDay(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(ifTheSameDay(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(ifTheSameDay(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(ifTheSameDay(new Date('2000/11/01'), new Date('2000/01/01')));

// Task 66
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

const twoArraysAsOne = (a: number[], b: number[]) => {
    return [...a, ...b];
}

console.log(twoArraysAsOne([1, 2], [3, 4]));
console.log(twoArraysAsOne([1, 2], [3, 4, 5, 6]));

// Task 67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

const arrayWithAllElements = (a: string[], b: string) => {
    let newArray = [...a];
    newArray.push(b);
    return newArray;
}

console.log(arrayWithAllElements(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 68
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

const stringAsFirstElement = (a: string[], b: string) => {
    let newArray = [...a];
    newArray.unshift(b);
    return newArray;
}

console.log(stringAsFirstElement(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 69
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

const bothObjectsAsOne = (a: { [key: string]: any }, b: { [key: string]: any }) => {
    return {
        ...a,
        ...b,
    };
}

console.log(bothObjectsAsOne({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(bothObjectsAsOne({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

// Task 70
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

interface CharacterInfo {
    eyeColor: string;
    age: number;
    favoriteMovie?: string;
}

const addMovie = (a: CharacterInfo, b: string): CharacterInfo => {
    return {
        ...a,
        favoriteMovie: b,
    };
};

console.log(addMovie({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(addMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'));