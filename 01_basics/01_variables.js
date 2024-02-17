const accountId = 22334455
let accountEmail = "rohit@demo.com"
var accountPassword = "1234"
accountCity = "Kalwa"
let accountState;

// accountId = 2 not allowed
accountEmail = "rsm@demo.com"
accountPassword = "23412345"
accountCity = "Junnar"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

