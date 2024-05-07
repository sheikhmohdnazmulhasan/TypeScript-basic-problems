// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.


type RepeatString = (value: string, numberOfIteration: number) => string;

const repeatString: RepeatString = (value, numberOfIteration) => {
    let initialValue = value;

    for (let i: number = 0; i < numberOfIteration - 1; i++) {
        initialValue += value;
    }

    return initialValue;
}

// console.log(repeatString("Hello!", 3)) //Hello!Hello!Hello!