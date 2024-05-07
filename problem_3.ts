// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

type FilterEvenNumbers = (numbers: number[]) => number[];

const filterEvenNumbers: FilterEvenNumbers = (numbers) => {

    const evenNumbers: number[] = numbers.filter(number => number % 2 === 0);

    return evenNumbers; // [ 2, 4, 6 ]

}


// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))
                                //   ^     ^     ^ 