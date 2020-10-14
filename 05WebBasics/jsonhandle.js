const student = {
    name : 'John',
    age : '23',
    isActive : true
}

//covert this object into string  to be stored in local storage

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString);


//localStorage.setItem('student', studentObjToString );

const toJson = JSON.parse(studentObjToString);

console.log(typeof toJson);

localStorage(toJson.age);