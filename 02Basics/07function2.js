function getUserRole(name, role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with some access`
            break;
        case "testprep":
            return `${name} is testprep access with contents`
            break;
         default:
             return `${name} is a trial user`
             break;   
    }
}

// var userRole = getUserRole("Arun", "admin");
// console.log(userRole);

console.log(getUserRole("Arun", "admin"));