//Zadaca 2
// Напишете 5 функции кои враќаат Promise

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are 18 or older.")
        } else {
            reject("You are under 18.")
        }
    })
}

function checkSex(sex) {
    return new Promise((resolve, reject) => {
        if (sex === 'male' || sex === 'female') {
            resolve(`You entered: ${sex}`)
        } else {
            reject("Invalid input. Please enter 'male' or 'female'.")
        }
    })
}

function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve(`${number} is a valid number.`)
        } else {
            reject(`${number} is not a valid number.`)
        }
    })
}

function checkUsername(username) {
    return new Promise((resolve, reject) => {
        if (username.length >= 6 && username.length <= 12) {
            resolve(`Username '${username}' is valid.`)
        } else {
            reject(`Username '${username}' is not valid. It must be between 6 and 12 characters long.`);
        }
    })
}

function getUserInput(userInput) {
    return new Promise((resolve, reject) => {
        if (userInput === 'yes') {
            resolve("User entered 'yes'")
        } else if (userInput === 'no') {
            reject("User entered 'no'")
        } else {
            reject("Invalid input")
        }
    })
}

//а. да се повикаат истите со .then() и .catch()
checkAge(19)
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.error(error)
    })

checkSex("female")
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.log(error)
    })

checkNumber(8)
    .then(number => {
        console.log(number)
    })
    .catch(error => {
        console.log(error)
    })

checkUsername("notpetar")
    .then(user => {
        console.log(user)
    })
    .catch(error => {
        console.log(error)
    })
getUserInput("no")
    .then(input => {
        console.log(input)
    })
    .catch(error => {
        console.log(error)
    })


//б. да се повикаат истите со async await каде што ќе ги употребите и блоковите try и catch

async function checkAge2(age) {
    try {
        const message = await checkAge(age)
        console.log(message)
    } catch (error) {
        console.error(error)
    }
}
checkAge2(12)

async function checkSex2(sex) {
    try {
        const message = await checkSex(sex)
        console.log(message)
    } catch (error) {
        console.log(error)
    }

}
checkSex2("male")


async function checkNumber2(num) {
    try {
        const message = await checkNumber(num)
        console.log(message)
    } catch (error) {
        console.log(error)
    }
}

checkNumber2(43)

async function checkUser(user) {
    try {
        const message = await checkUsername(user)
        console.log(message)
    } catch (error) {
        console.error(error)
    }
}

checkUser("marko")

async function getUserInput2(input) {
    try {
        const message = await getUserInput(input)
        console.log(message)
    } catch {
        console.log(error)
    }
}

getUserInput2("yes")

