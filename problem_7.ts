// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


const logString = (params: unknown): string | Error => {

    if (typeof params === 'string') {
        return params;

    } else {
      return 'Input is not a string.'
    }
}



// console.log(logString("Hello, TypeScript!")); //Hello, TypeScript!
// console.log(logString(3434)); //Parameter is not a string.