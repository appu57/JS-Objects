const obj = {};
let key = "constructor";
if(key in obj)
{
    console.log(`key ${key} is present in obj`);
}
else{
    console.log(`key not found in obj`);
}

//If "key" doesnt exist in the object "in" starts finding the key in prototype of an object , a prototype will have the key

//To solve above we can use hasOwn
if(Object.hasOwn(obj,key))
{
    console.log(`key ${key} is present in obj`);
}
else{
    console.log(`key not found in obj`);//prints not found
}

const emptyObj = Object.create(null);
console.log(emptyObj.hasOwnProperty(key)); //throws TypeError: Object.hasOwnProperty is not a function because when object is created with null , its prototype chaining will be empty so when we are trying to find aboid using hasOwnProperty and use hasOwn