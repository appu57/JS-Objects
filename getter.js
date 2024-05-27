//Modify the code so that console prints 1, 2, 3

// const object = {};

// console.log(object.a);
// console.log(object.a);
// console.log(object.a);


//Answer

const object = {
    val: 1,
    get a() {     //called as get accessors
        return this.val++;
    },

    set a(value) {
        this.val = value
    }
}


console.log(object.a);  //one of the way to call method without () is using getter within an object
console.log(object.a);
console.log(object.a);


//Getter function should not be called with ()

"###############################################################################################################################################################"
let a = ["ab", "animals", "cat", "dog"];
console.log(Object.keys(a)); //[ '0', '1', '2', '3' ]
console.log(Object.values(a));//[ 'ab', 'animals', 'cat', 'dog' ]


const arr = Object.keys(a).map(key => {
    console.log(key);//only keys such as 1,2,3
    return key
}).join("");


const b ={
    a: 1,
    b: 2,
    c: 3
}
const arr1 = Object.keys(b).map(key => {
    console.log(key);//only keys such as a,b,
    return key
}).join("");

if (Object.keys(b).map(key => key).join("") === "abc") {
    console.log("All keys form the string 'abc'");
} else {
    console.log("Keys do not form the string 'abc'");
}


"###############################################################################################################################################################"