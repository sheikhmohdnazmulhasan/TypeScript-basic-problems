// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.


type FindLargestNumber = (numbers: number[]) => number

const findLargestNumber: FindLargestNumber = (numbers) => {

    let largest = numbers[0]; //10

    for (let i: number = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }

    return largest //20
};


// console.log(findLargestNumber([10, 5, 8, 20, 3]))
                                // 0  1  2   3   4

