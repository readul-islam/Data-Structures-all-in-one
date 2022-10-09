/* ----------------------------------- OBJECTIVES----------------------------------------- */
/* 

1.Explain what a class is?
ans:A class is blueprint for creating objects with pre-defined properties and methods
2.Understanding how javascript implements the idea of a class
3.Define terms like abstraction , encapsulation, and polymorphism
4.Use ES6 classes to implements data structures
*/

//define class
class Students {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName}${this.lastName}`;
    }
    score(num){
        this.scores.push(num);
       return this.scores;
    }
    avarageScore (){
        let sum = this.scores.reduce(function(a,b){return a + b;},0)
      const avg = sum / this.scores.length-1
        return avg;
    }

}



//call class with new key words

const readul = new Students('Readul', 'islam', 22)
const jubayer = new Students('Jubayer', 'islam', 22)



console.log(jubayer,jubayer.score(70));
console.log(jubayer,jubayer.score(80));
console.log(jubayer,jubayer.score(100));
console.log(jubayer.avarageScore())