// object literal
const person = {
    firstName: "Darko",
    lastName: "Angelovski",
    greetings: function(){
        return "Hello from the person object";
    },
    getDetails: function(){
        // return `Hello my name is ${person.firstName} ${person.lastName}`
        return `Hello my name is ${this.firstName} ${this.lastName}`
    }
}

console.log(person)
console.log(person.firstName); // access to a property of an object
console.log(person.greetings()) // access to a method of an object
console.log(person.getDetails())
console.log(person['firstName']);
console.log(person.hasOwnProperty('firstName')); // proveruvame dali postoi nekoe property vo objektot. Kako vrednost vrakja true ili false
if(person.hasOwnProperty('firstName')){
    console.log('First name property exists');
}else{
    console.log('First name property does not exists in the object')
}

person.age = 30; // kako da dodademe property vo objektot
console.log(person.age);

// for(let item in person){
//     console.log(`${item} ${person[item]}`);
// }
delete person.age;
delete person.greetings;
console.log(person);

function Person(firstname,lastName){
    this.firstName = firstname;
    this.lastName = lastName;
    this.greetings = function(){
        return 'Hello from the person object'
    }
    this.getDetails = function(){
        return `Hello my name is ${this.firstName} ${this.lastName}`;
    }
}

// DESTRUCTURING
const {firstName, lastName} = person;

let darko = new Person('Darko','Angelovski');
console.log(darko.firstName);



