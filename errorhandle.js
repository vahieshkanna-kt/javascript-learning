//try – contains code that might produce an error.
//catch – handles an error if one occurs in the try block.
try {
    let result = age + 10;
    console.log(result);
}
catch (error) {
    console.log("Something went wrong");
}

//finally - The finally block executes after the try and catch process, whether an error occurs or not.

try {
    console.log("Program started");
}
catch (error) {
    console.log("Error occurred");
}
finally {
    console.log("Program finished");
}

//throw - The throw keyword lets you create your own error when a condition is not satisfied.
let age = 15;

try {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    console.log("Allowed");
}
catch (error) {
    console.log(error.message);
}