//Zadaca 2
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
}

//a
let additionalInfo = {
    email: "john@doe.com",
    phone: "223-305",
    education: {
        degree: "University of Doe",
        major: "Computer Science"
    },
}

let combinedArray = { ...person, ...additionalInfo }
console.log(combinedArray)

//b
let user = {
    id: 123,
    username: "jsmith",
    fullName: { firstName: "John", lastName: "Smith" },
    contact: { email: "john@example.com", phone: "555-555-5555" },
    addresses: [
        {
            type: "home",
            street: "123 Main Street",
            city: "New York",
            state: "NY",
            zip: "10001",
        },
        {
            type: "work",
            street: "456 Market Street",
            city: "San Francisco",
            state: "CA",
            zip: "94105",
        },
    ],
}

const { username } = user
console.log(username)

const { firstName, lastName } = user.fullName
console.log(firstName, lastName)

const { email } = user.contact
console.log(email)

const { street: homeStreet, city: homeCity, state: homeState, zip: homeZip } = user.addresses[0]
console.log(homeStreet, homeCity, homeState, homeZip)


const { street: workStreet, city: workCity, state: workState, zip: workZip } = user.addresses[1]
console.log(workStreet, workCity, workState, workZip)



