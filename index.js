// class Vehicle{
//     constructor(tyre,gates){
//         this.tyre=tyre;
//         this.gates=gates;
//     }
//     soundSystem(){
//         console.log('${this.gates} makes a sound')
//     }

    
   
// }

// class Maruti extends Vehicle{
//         soundSystem(){
//             console.log('${this.tyre} makes us happy');
//         }
// }

// const maruti= new Maruti('4','4');
// maruti.soundSystem();





// class Home {
//     constructor(address, owner) {
//       this.address = address;
//       this.owner = owner;
//     }
// }
  
// class SmartHome extends Home {
//     constructor(address, owner, property) {
//       super(address, owner);
//       this.property = property;
//     }
// }

// const myHome = new Home("123 RGM ", "someone");


// const mySmartHome = new SmartHome("456 Nandyal", "some another", 5443344);

// console.log(myHome)
// console.log(mySmartHome)




// exception handling

// function divide(a,b){
//     try{
//         if(b==0){
//             throw new Error('Divide by 0 id not allowed')
//         }
//         return a/b;
//     }
//     catch{
//         console.log('Error.message')
//     }
// }

// const ans = divide(4,0);



// write a js function that a number as a parameter and throws an error if the number is not a integer


// function afunction(numm){
//     try{
//         if(Number.isInteger(numm)){
//             console.log('This is an Integer');
//         }
//     }
//     catch{
//         console.error('this is not an Integer')
//     }
// }

// const nummm = afunction(4.4);


// write a fuction that takes a input in as a string and throws an error of teh length of string is less than 5

// function checkstring(name){
//     try{
//         if(name.length<5){
//             console.error('${name} is less than 5 characters');
//         }
//     }
//     catch{
//         console.log('${name} is more than 5 characters')
//     }
// }

// const na = checkstring('kld');




// make a add function with two parameters if any one parameter is 0 then exception handling.

// function add(para1, para2) {
//     try {
//       if (para1 === 0 || para2 === 0) {
//         throw new Error('One of the input is zero');
//       }
//       return para1 + para2;
//     } catch (error) {
//       console.error('Error');
//     }
//   }
  
//   console.log(add(10, 80));
  



// write a js function that takes an array as a parameter and throws an error if length of array is less than 5.

// function inputarray(arr){
//     try{
//         if(arr.length<5){
//             throw Error(`${arr} length is less than 5`);
//         }    
//         console.log(arr);
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }
// const test = inputarray([1,2,5,5,45,44])