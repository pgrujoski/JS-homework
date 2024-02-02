//Zadaca 4
let zooAnimals = [
    {
        id: "0938aa23-f153-4937-9f88-4858b24d6bce",
        name: "lions",
        popularity: 4,
        location: "NE",
        residents: [
            {
                name: "Zena",
                sex: "female",
                age: 12,
            },
            {
                name: "Maxwell",
                sex: "male",
                age: 15,
            },
            {
                name: "Faustino",
                sex: "male",
                age: 7,
            },
            {
                name: "Dee",
                sex: "female",
                age: 14,
            },
        ],
    },
    {
        id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
        name: "tigers",
        popularity: 5,
        location: "NW",
        residents: [
            {
                name: "Shu",
                sex: "female",
                age: 19,
            },
            {
                name: "Esther",
                sex: "female",
                age: 17,
            },
        ],
    },
    {
        id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
        name: "bears",
        popularity: 5,
        location: "NW",
        residents: [
            {
                name: "Hiram",
                sex: "male",
                age: 4,
            },
            {
                name: "Edwardo",
                sex: "male",
                age: 4,
            },
            {
                name: "Milan",
                sex: "male",
                age: 4,
            },
        ],
    },
    {
        id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
        name: "penguins",
        popularity: 4,
        location: "SE",
        residents: [
            {
                name: "Joe",
                sex: "male",
                age: 10,
            },
            {
                name: "Tad",
                sex: "male",
                age: 12,
            },
            {
                name: "Keri",
                sex: "female",
                age: 2,
            },
            {
                name: "Nicholas",
                sex: "male",
                age: 2,
            },
        ],
    },
    {
        id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
        name: "otters",
        popularity: 4,
        location: "SE",
        residents: [
            {
                name: "Neville",
                sex: "male",
                age: 9,
            },
            {
                name: "Lloyd",
                sex: "male",
                age: 8,
            },
            {
                name: "Mercedes",
                sex: "female",
                age: 9,
            },
            {
                name: "Margherita",
                sex: "female",
                age: 10,
            },
        ],
    },
    {
        id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
        name: "frogs",
        popularity: 2,
        location: "SW",
        residents: [
            {
                name: "Cathey",
                sex: "female",
                age: 3,
            },
            {
                name: "Annice",
                sex: "female",
                age: 2,
            },
        ],
    },
    {
        id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
        name: "snakes",
        popularity: 3,
        location: "SW",
        residents: [
            {
                name: "Paulette",
                sex: "female",
                age: 5,
            },
            {
                name: "Bill",
                sex: "male",
                age: 6,
            },
        ],
    },
    {
        id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
        name: "elephants",
        popularity: 5,
        location: "NW",
        residents: [
            {
                name: "Ilana",
                sex: "female",
                age: 11,
            },
            {
                name: "Orval",
                sex: "male",
                age: 15,
            },
            {
                name: "Bea",
                sex: "female",
                age: 12,
            },
            {
                name: "Jefferson",
                sex: "male",
                age: 4,
            },
        ],
    },
    {
        id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
        name: "giraffes",
        popularity: 4,
        location: "NE",
        residents: [
            {
                name: "Gracia",
                sex: "female",
                age: 11,
            },
            {
                name: "Antone",
                sex: "male",
                age: 9,
            },
            {
                name: "Vicky",
                sex: "female",
                age: 12,
            },
            {
                name: "Clay",
                sex: "male",
                age: 4,
            },
            {
                name: "Arron",
                sex: "male",
                age: 7,
            },
            {
                name: "Bernard",
                sex: "male",
                age: 6,
            },
        ],
    },
]

//а. испечатете ги имињата на животните кои имаат популарност поголема од 4
let popularAnimals = zooAnimals
    .filter(animal => animal.popularity > 4)
    .map(animal => animal.residents.map(resident => resident.name))

console.log(popularAnimals);

// б. отпечатете го името на најстариот слон
let oldestElephant = zooAnimals
    .find(animal => animal.name === "elephants")
    .residents.reduce((oldest, current) => (current.age > oldest.age ? current : oldest));

console.log(oldestElephant.name)
// в. испечатете ги сите имиња на пингвини кои се помали од 10 години и се женки
let youngFemalePenguins = zooAnimals
    .find(animal => animal.name === "penguins")
    .residents.filter(penguin => penguin.sex === "female" && penguin.age < 10);

let namesOfYoungFemalePenguins = youngFemalePenguins.map(penguin => penguin.name);

console.log(namesOfYoungFemalePenguins);


// г. најдете ја групата животни чие име има најмногу букви и потоа испечатете го збирот на возраста на жителите
let longestNameGroup = zooAnimals.reduce((longest, current) => (
    current.name.length > longest.name.length ? current : longest))

console.log(longestNameGroup.name)

let sumOfAges = longestNameGroup.residents.reduce((sum, resident) => sum + resident.age, 0);

console.log(sumOfAges);

// д. најдете која група на животни има најмал број жители и најголем број жители, 
//потоа направете нова низа која ги содржи сите имиња на жителите

let sortedGroups = [...zooAnimals].sort((a, b) => a.residents.length - b.residents.length);
let groupWithLowestResidents = sortedGroups[0];
let groupWithHighestResidents = sortedGroups[sortedGroups.length - 1];

console.log("Najmal broj na ziteli:", groupWithLowestResidents.name);
console.log("Najgolem broj na ziteli:", groupWithHighestResidents.name);

let namesOfResidents = [
    ...groupWithLowestResidents.residents.map(resident => resident.name),
    ...groupWithHighestResidents.residents.map(resident => resident.name)
];

console.log("Site iminja:", namesOfResidents);


