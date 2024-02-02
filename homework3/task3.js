//Zadaca 3
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    ]

//a
let countriesWithLand = countries.filter(country => country.includes("land")).map(country => country.toUpperCase());
console.log(countriesWithLand)

//b
//б. Испечатете ги сите земји што завршуваат со 'ia' и нивното име е поголемо од 7 букви.

let countriesWithIa = countries.filter(country => country.includes("ia") && country.length > 7)
console.log(countriesWithIa)