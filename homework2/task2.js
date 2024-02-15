// Zadaca 2

//a 
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//b
let start = 4
let end = 9
let sum = 0
for (let j = start; j <= end; j++) {
    if (j % 2 === 0) {
        sum += j;
    }
}
console.log(sum)

//v
let person = {
    name: "Petar",
    age: 33, 
    city: "Gostivar",
}
for(let key in person) {
    console.log(key + ": " + person[key])
}

//g
let colors = ["red", "green", "blue", "yellow", "purple"]
for (let k of colors) {
    console.log(k.length, k)
}
