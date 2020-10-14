var john = {
    name : "Iam John",
    age : 23,
    isActive : true
}
var nash = {
    name : "Iam nash",
    age : 20,
    isActive : true
}
var angel = {
    name : "Iam angel",
    age : 29,
    isActive : false
}

let users = new Map()

//console.log(typeof users);


users.set('john', john)
users.set('nash', nash)
users.set('angel', angel)

//console.log(users);

//console.log(users.size);

//console.log(users.get('john'));

//console.log(users.values());



// for (const keys of users.keys()){
//     console.log(key);
// }



// for (const value of users.values()){
//     console.log(value.name);
// }


for (const [key, value] of users.entries()) {
    console.log(`The key is ${key} and the value of it is ${value.name}`);
}