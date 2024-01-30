//Zadaca 4

let students = [{
    name: "Petar",
    surname: "Grujoski",
    age: 33, 
    address: {
        city: "Skopje",
        street: {
            name: "Eseninova",
            number: 13, 
            zipCode: "1000",
        }
    }
},
 {
    name: "Marko",
    surname: "Markoski",
    age: 22, 
    address: {
        city: "Kumanovo",
        street: {
            name: "Zagrebska",
            number: 34, 
            zipCode: "1230",
        }
    }
}]

console.log(students[0].address.city)
console.log(students[1]["address"]["street"]["name"])
