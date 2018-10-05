import { User } from './user';
function echo<T>(arg: T): T {
    return arg;
}

let myStr = echo<boolean>(true);
//console.log(myStr);

class Admin extends User {

}

class Manager extends User {

}

let admin = new Admin("D", "K");
let manager = new Manager("R", "S");

function userEcho<T extends User>(user: T): T {
    return user;
}

class Test {

}

let adm = userEcho(admin);
let mgr = userEcho(manager);

console.log("admin:" + adm.getFullName())
console.log("manager:" + mgr.getFullName())

//Invalid code
// let test = new Test();
// let obj = userEcho(test);

