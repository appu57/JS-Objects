/*  Define Property */


let user = {
    id:1,
    name :"Javascript",
}

Object.defineProperty(user,"id",{writable:false});  //restricts from changing a field we dont want it to be changed once initialised

user.id=0;  //remains 1
console.log(user);

/* Object.keys */

let user ={
    name:"A",
    address:{
        city:"Cityyyy",
    },
};
console.log("length is "+Object.keys(user).length);  //returns number of keys of user object

