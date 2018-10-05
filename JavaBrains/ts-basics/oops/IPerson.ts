
interface IProson {
    firstName: string;
    lastName: string;

    getFullName(): string;
}

class Person implements IProson {


    constructor(public firstName: string, public lastName: string) { }
    getFullName(): string {
        return this.firstName + this.lastName;
    }
}

let iPerson: IProson = new Person("", "");

let someObj = {
    firstName: "Test",
    lastName: "test",
    foo: "fsdfskd",
    getFullName: (): string => ""
}

// Duck Typeing: allows only if object have all the matching prop of interface
iPerson = someObj

//only matching to IPerson properties can get
//let  foo =  iPerson.foo;