class User{
    constructor(firstname,middlename,lastname,credit){
        this.firstname=firstname;
        this.middlename=middlename;
        this.lastname=lastname;
        this.credit=credit;

    }
getfullName(){
    let fullname = `${this.firstname} ${this.lastname} is my full name`;
    return fullname

}

getfullName1(){
    let fullname = `${this.firstname} ${this.middlename} ${this.lastname} is my full name`;
    return fullname

}

//fullName(todo) => { return `${this.firstname} ${this.lastname} is my full name`; }  // How to use arrow function here? Find out.

editName(newname){
 const myname = newname.split(' ')  // Give a string with space, so that it creates a array delimeter for elements
 this.firstname=myname[0];
 this.lastname=myname[1];
}

getMiddleName(newname){
    const myname = newname.split(' ')
    this.firstname=myname[0];
    this.middlename=myname[1];
    this.lastname=myname[2];
}

}


class Teacher extends User{
    constructor(firstname,lastname,credit,subject){
    super(firstname,lastname,credit);
    this.subject=subject;

    }
}

const john = new User('John','Anderson',44);
console.log(john.getfullName());


john.editName('Johnny Anderson');
console.log(john.getfullName());

john.getMiddleName('Albert Ronny Dzuza');
console.log(john.getfullName1());


// const sammy = new User('Sammy','Dom',45);

// console.log(sammy);