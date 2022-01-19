// Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by three without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both three and five without a remainder print FizzBuzz.

// user input a number
let numInput = parseInt(prompt('input a number to fizzbuzz'));

// print each number between 1 and the input
for (let i = 1; i <= numInput; i++){
    if(i%3 == 0 && i%5==0){
        //print fizzbuzz if i is dividible by both 3 & 5
        console.log(`fizzbuzz`);
    } else if(i%3 == 0){
        // print fizz if i is dividible by 3
        console.log(`fizz`);
    } else if(i%5 == 0){
        // print buzz if i is dividible by 3
        console.log(`buzz`);
    } else {
        // if i isn't dividible by both 3 & 5, print the number instead
        console.log(i);
    }
}