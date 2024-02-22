// Задача 2.

// Да се дефинира класа Rectangle со следните атрибути и методи:

// color
// width - приватна променлива
// height - приватна променлива
// Статичен метод getShapeType() кој што ќе враќа “Rectangle”
// Гетери и сетери за атрибутите width и height
// Метод getArea() кој што ќе ја пресметува плоштината
// Метод describe() koj што ќе ги принта бојата, ширината и висината на правоаголникот.
// Да се направат неколку инстанци од оваа класа и да се употребат соодветните методи.

class Rectangle {
    
    #width
    #height

    static getShapeType() {
        return "Rectangle"
    }

    constructor(color, width, height) {
        this.color = color
        this.#width = width
        this.#height = height
    }

    get getHeight() {
        return this.#height
    }

    get getWidth() {
        return this.#width
    }

    set setHeight(newHeight) {
        if (newHeight > 0) {
            this.#height = newHeight
        } else {
            console.log("Error, enter positive number")
        }
    }

    set setWidth(newWidth) {
        if (newHeight > 0) {
            this.#width = newWidth
        } else {
            console.log("Error, enter positive number")
        }
    }

    getArea() {
        return this.#height * this.#width
    }
    describe() {
        console.log(`The color is ${this.color}, the width is ${this.#width} and the height is ${this.#height}`)
    }

}

const blueRectangle = new Rectangle("blue", 10, 20)
const redRectangle = new Rectangle("red", 5, 8)

console.log(blueRectangle.getArea())
console.log(redRectangle.getArea())
blueRectangle.describe()
redRectangle.describe()
console.log(Rectangle.getShapeType())