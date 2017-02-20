var el = this.document.getElementById("content");
var el2 = this.document.getElementById("Age");
var User = (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var age = 29;
var tom = new User("Том", age);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
var names;
console.log(age);
//# sourceMappingURL=app.js.map