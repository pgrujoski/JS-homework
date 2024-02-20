// Задача 1.

// Да се креира класа Animal која што ќе има барем две својства и два методи. 
// Потоа да се направи класа Dog која што ќе наследува од класата Animal. 
// Дополнително, класата Dog да има барем плус уште едно својство и уште еден метод. 
// Да се направат инстанци од двете класи и да се повикаат соодветните методи. 
// Својствата и методите ги дефинирате вие сами.

class Animal {
    constructor(name, species){
        this.name = name
        this.species = species
    }
    
    introduce() {
        console.log(`This ${this.species} name is ${this.name}`)
    }
    perform(action) {
        console.log(`The ${this.species} performs a ${action}`)
    }
}

class Dog extends Animal {
    constructor(name, species, breed) {
        super(name, species)
        this.breed = breed
    }
    fetchBall() {
        console.log(`The ${this.breed}, named ${this.name} fetches the ball!`);
    }


}

const lion = new Animal("Simba", "Lion")
const dogge = new Dog("Bilbo", "Dog", "Bulldog")

lion.introduce()
lion.perform("Jump")

dogge.fetchBall()


