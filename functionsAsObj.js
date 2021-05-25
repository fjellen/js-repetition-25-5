function createUser(firstname, lastname) {
    return function() {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}


const UserClass = createUser("sebastian", "karlsson");

const person1 = new UserClass();
const person2 = new UserClass();
const person3 = new UserClass();

console.log(person1);
console.log(person2);
console.log(person3);