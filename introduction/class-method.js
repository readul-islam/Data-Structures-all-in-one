class Students {
    constructor(name,age ,roll,marks){
        this.name = name;
        this.age = age ;
        this.roll= roll;
        this.marks = marks;
    }
    static marksDistance(...arg){
       console.log(arg)
       arg.map(data => console.log(data.name))
        
    }
}
const sami = new Students ('Sami islam' , 22,101, 80);
const safin = new Students ('safin islam' , 20,102, 10);

console.log(Students.marksDistance(sami,safin))