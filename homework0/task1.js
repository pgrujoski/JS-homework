//Задача 1

let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

//Does the student have either tea or milk?
let question1 = hasTea || hasMilk;
console.log(question1);

// Does the student have both coffee and tea?
let question2 = hasCoffee && hasTea;
console.log(question2);

// Is it true that the student doesn't have tea?
let question3 = !hasTea;
console.log(question3);

// Does the student have either coffee or milk, but not both?
let question4 = (hasCoffee || hasMilk) && !(hasCoffee && hasMilk);
console.log(question4);

// Is it true that the student has either tea and milk, or coffee and tea?
let question5 = (hasTea && hasMilk) || (hasCoffee && hasTea);
console.log(question5);

// Does the student have neither coffee nor tea?
let question6 = !(hasCoffee || hasTea);
console.log(question6);
