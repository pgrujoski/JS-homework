// Задача 5

function swap(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz")
    } else if (number % 3 == 0) {
         console.log("Fizz")
    } else if (number % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}
swap(15)