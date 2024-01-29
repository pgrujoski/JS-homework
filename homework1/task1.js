//Zadaca 1

let globalNum = 10


function checkScope(){
    let localNum = globalNum
    console.log(globalNum)
}
checkScope();

// console.log(globalNum === localNum);
// во конзола се добива грешка, бидејќки localNum  не е дефинирана променлива, надвор од функцијата.

if(globalNum => 10){
    let blockNum = 30;
    }
console.log(typeof blockNum);

// typeof на променливата blockNum е undefined, бидејќи се наоѓа внатре во условот. 
// доколку е дефинирана надвор од условот, typeof на променливата е Number.

