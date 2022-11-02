class Person{
    constructor(name){
        this.name=name;
    }
    sayMayName(){
        return `My Name is ${this.name}!`;
    }
}

module.exports = {
    Person,
};