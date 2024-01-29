//Задача 2

let score = 78

if (score > 100 || score < 0) {
    console.log("Invalid score! Please enter a score between 0 and 100")
} else if (score > 89 && score <= 100) {
    console.log("Grade A")
} else if (score > 79 && score <= 90) {
    console.log("Grade B")
} else if (score > 69 && score < 80) {
    console.log("Grade C")
} else if (score > 59 && score < 70) {
    console.log("Grade D")
} else if (score < 60) {
    console.log("Grade F")
}

let dayNumber = 4

switch (dayNumber) {
    case 1:
      console.log("The day is Sunday.")
      break
    case 2:
        console.log("The day is Monday.")
        break
    case 3:
        console.log("The day is Tuesday.")
        break
    case 4:
        console.log("The day is Wednesday.")
        break
    case 5:
        console.log("The day is Thursday.")
        break
    case 6:
        console.log("The day is Friday.")
         break
    case 7:
        console.log("The day is Saturday.")
        break
    default:
      console.log("Invalid day number. Please enter a number between 1 and 7.")
}

