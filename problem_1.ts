// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.



// Define a type alias named RepeatString which describes a function that takes a string value and a number indicating the number of iterations, and returns a string.
type RepeatString = (value: string, numberOfIteration: number) => string;

// Define a function named repeatString that matches the RepeatString type alias.
const repeatString: RepeatString = (value, numberOfIteration) => {
    // Initialize a variable named initialValue with the value of the input string.
    let initialValue = value;

    // Start a for loop, iterating from 0 to numberOfIteration - 1.
    for (let i: number = 0; i < numberOfIteration - 1; i++) {
        // Concatenate the input string value to the initialValue variable.
        initialValue += value;
    }

    // Return the concatenated string.
    return initialValue;
}