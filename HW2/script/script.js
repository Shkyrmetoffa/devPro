/* Write a function that retrive 2 arrays and return an array with numbers from 
the first array which aren't present in the second array. */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 5, 7, 9];
const getUniqNum = (arr1, arr2) => arr1.filter(x => arr2.indexOf(x) < 0);

console.log(getUniqNum(arr1, arr2));

/*  Write 2 function that return number from fibonacci sequence by a given index, 
use recursion and iterative approach. */
let fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2);

console.log(fib(3));

// Second recursion way
const fibonacci = (n, num1 = 1, num2 = 1) => {
    var num = num1 + num2;
    return (n == 3) ? num : fibonacci(n - 1, num2, num);
}

console.log(fibonacci(77));

// Iterative approach

const fibIter = (n) => {
    var a = 1;
    var c = 0;

    for (; n > 0; n--) {
        c = c + a;
        a = c - a;
    }
    return c;
}
console.log(fibIter(3));
console.log(fibIter(77));

/* Write two function that return factorial of a given number, use recursion and 
iterative approach. */
let factorial = (n) => n ? n * factorial(n - 1) : 1;


console.log(factorial(5));

//Iterative approach

const factorialIterate = (n) => {
    let res = 1;
    while (n) res *= n--;
    return res;
}
console.log(factorialIterate(5));