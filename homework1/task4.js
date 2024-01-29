// Задача 4

let age = 21

if(age >= 18 && age < 21) {
    console.log("You can vote but you can't buy Alcohol")
} else if(age >= 21) {
    console.log("You can vote, and you can buy Alcohol")
}else {
    console.log("Sorry, You can't vote and you can't buy Alcohol")
}

function daysMonth(month){
    switch (month)   {
        case "January":
            console.log(31)
            break
        case "February":
            console.log(28)
            break
        case "March":
            console.log(31)
            break
        case "April":
            console.log(30)
            break
        case "May":
            console.log(31)
            break
        case "June":
            console.log(30)
            break
        case "July":
            console.log(31)
            break
        case "August":
            console.log(31)
            break
        case "September":
            console.log(30)
            break
        case "October":
            console.log(31)
            break
        case "November":
            console.log(30)
            break
        case "December":
            console.log(31)
            break
        default:
            console.log("Invalid input")
    } 
}
daysMonth("June")

let temperature = 11

if (temperature >= 30) {
    console.log("It's hot outside")
} else if (temperature > 20) {
    console.log("It's warm outside")
} else if (temperature >= 15 && temperature <=20) {
    console.log("Moderate weather")
} else {
    console.log("It's cold outside")
}



