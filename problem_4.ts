// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

const reverseArray = <T>(incomingArray: T[]): T[] => {
    const reversed: T[] = [];

    for (let i = incomingArray.length - 1; i >= 0; i--) {
        reversed.push(incomingArray[i]);
    };

    return reversed;
};


// console.log(reverseArray([30, 20, 10])) //[ 10, 20, 30 ]

// console.log(reverseArray(["apple", "banana", "cherry"])) //[ 'cherry', 'banana', 'apple' ]


// option 2 
const reverseArray2 = <T>(incomingArray: T[]): T[] => {

    return incomingArray.reverse();
};


// console.log(reverseArray2(["apple", "banana", "cherry"])); //[ 'cherry', 'banana', 'apple' ]

// console.log(reverseArray2([30, 20, 10])) // [ 10, 20, 30 ]