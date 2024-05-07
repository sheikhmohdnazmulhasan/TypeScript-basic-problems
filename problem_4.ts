// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

const reverseArray = <T>(array: T[]): T[] => {
    const reversedArray: T[] = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    };

    return reversedArray; // [ 10, 20, 30 ] or [ 'cherry', 'banana', 'apple' ]
};


// console.log(reverseArray([30, 20, 10])) //[ 10, 20, 30 ]

// console.log(reverseArray(["apple", "banana", "cherry"])) //[ 'cherry', 'banana', 'apple' ]


// option 2 
const reverseArray2 = <T>(array: T[]): T[] => {
    return array.reverse();
}


// console.log(reverseArray2(["apple", "banana", "cherry"])); //[ 'cherry', 'banana', 'apple' ]

// console.log(reverseArray2([30, 20, 10])) // [ 10, 20, 30 ]