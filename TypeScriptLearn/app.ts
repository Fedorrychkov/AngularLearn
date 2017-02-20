var el = this.document.getElementById("content");
var el2 = this.document.getElementById("Age");
class User{
    name : string;
    age : number;
    constructor(_name:string, _age: number){

        this.name = _name;
        this.age = _age;
    }
}
let age : number = 29;
var tom : User = new User("Том", age);
el.innerHTML="Имя: " + tom.name + " возраст: " + tom.age;
let names : string[] | string | number;
console.log(age);
