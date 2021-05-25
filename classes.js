// klass ar som ett recept for hur ett objekt skall skapas.
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    tellMeYourName() {
        console.log(this.firstname, this.lastname);
    }
}

// har skapar vi objektet utifran receptet.
// har heter receptet "Person".
const myPerson = new Person("John", "Doe");

// har heter receptet "Cake".
class Cake {
    constructor(sugar, cream) {
        this.sugar = sugar;
        this.cream = cream;
    }
}

// har skapar vi ett Cake objekt utifran receptet.
const myCake = new Cake(5, 2);

console.log(myCake);