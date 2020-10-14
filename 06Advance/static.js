class Uber {

   static sayHi(){
        console.log('Iam a static function');

    }
}

Uber.sayHi();


//getters and setters

class Driver {
    constructor(name){    
    this._name=name;
    }

    get myname(){
        return this._name;
    }

    set myname(val){
        this._name=val;
    }
}

let drive =  new Driver('John');
console.log(drive.myname);

