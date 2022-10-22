// pour enregister data in local storage setItem(key=>'nameOfTable',value=>"hi")
localStorage.setItem('nameOfTable','hello');
// to update value of table
localStorage.setItem('nameOfTable','Hi');
// to remove object or item  
localStorage.removeItem('nameOfTable');//=> seulement le key or var
// to remove all(object or item )  
localStorage.clear;
// to get data from  local storage 
localStorage.getItem('nameOfTable'); //key or variable=>nameOfTable

// Properties and methods provided by the localStorage object:

//> setItem( key , value ): stores key/value pair
// >getItem( key ): returns the value in front of key
// >key( index ): get the key on a given index
// >length: returns the number of stored items(data)
// >removeItem( key ): removes given key with its value
// >clear(): deletes everything from the storage


localStorage.removeItem("TabTodo") //to remove tab tabTOdo
localStorage.clear();             //to remove  all tables
 console.log(localStorage.key(0)); //get the key on a given index >for exemple 0 index to IN progress .....

/*************************************DATA TYPE INTEGER OR FLOAT********************************************************** */
localStorage.setItem("number",22);
console.log(localStorage.getItem("number")+20);  // affiche (2220) comme string but not add 22 to 20 equel(42)  because de data  is transfert is a string

console.log( parseInt(localStorage.getItem("number"))+20);// affiche (42) comme integer because we are using the parseInt\parseFloat
/*********************************************************************************************** */
/*************************************DATA TYPE  -OBJECT********************************************************** */
// localStorage.setItem("arrayAziz",["aziz1","aziz2","aziz3","aziz4"]);
// console.log(localStorage.getItem("arrayAziz")); // afiche aziz1,aziz2,aziz3,aziz4 comme string
// console.log(localStorage.getItem("arrayAziz").split(",")); // create new array and put this strings separate with  symbol (,) afficher comme=> " ['aziz1', 'aziz2', 'aziz3', 'aziz4']"
/*********************************************************************************************** */

/*************************************DATA TYPE  -OBJECT********************************************************** */
let object ={name:"aziz",age:"24"};
// localStorage.setItem("objet1",object);
// console.log(localStorage.getItem("objet1")); // afiche =>[object Object]

localStorage.setItem("objet1",JSON.stringify(object) ); // changer de type objet =>to  type string sous form json {a:"",b:"",c:""........}
console.log(JSON.parse(localStorage.getItem("objet1")) );// changer de type string sous form json {a:"",b:"",c:""........} to type objet 
// like this form
/* {name: 'aziz', age: '24'}
 age: "24"
 name: "aziz"
/*********************************************************************************************** */