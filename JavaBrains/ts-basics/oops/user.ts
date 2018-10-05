export class User {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

//var user: User = new User("Dnyaneshwar", "Kawathe")

//console.log(user.getFullName());

