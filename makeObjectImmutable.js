const value = {
     id:0,
     name:"Javascript"
}

Object.seal(value); //stops user from adding new property or delete property, language is not added into value object
value.language = "Scripting"; 
console.log(value); 


Object.freeze(value) ; //stops user from modifying object property value
value.id=1;
console.log(value);


function freeze(val)    //instead of 11 directly using freeze we can call method to freeze any object we pass an arguement
{
     return Object.freeze(val);
}

//To stop user from modifying nested object 

function freezeNested(val){
     Object.keys(val).forEach(key=>{   //for each key of object "val" check the type of val[key] if val[key] is object then restrict
          if(typeof val[key] === 'object')
          {
               freeze(val[key]);
          }
     })
}
