class Customer {

    //readonly username: string;
    constructor(readonly userName: string) {
    }
}
var cust = new Customer("dkkawathe1");
console.log(cust.userName)
//user.username = "dkkawathe"