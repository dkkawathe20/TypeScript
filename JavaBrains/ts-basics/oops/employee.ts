
class Employee {

    constructor(public firstName: string, public lastName: string) {
    }

    greet() {
        console.log("Hey there!");
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(name: string) {
        this.firstName = name;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(name: string) {
        this.lastName = name;
    }


    getFullname(): string {
        return this.firstName + this.lastName;
    }


}

class Programmer extends Employee {

    greet() {
        console.log("Hello world!")
    }

    greetNormal() {
        super.greet();
    }
}

var employee: Employee = new Programmer("D", "K");
//employee.firstName = "";
//employee.greetNormal();  

console.log(employee.getFullname())