// let num1 = 10
// let num2 = 20
// //LOGICAL OPERATORS
// let num3 = "10"
// let word1 = "Hello";
// let word2 = "hello";

// console.log(num1 < num2); //less than
// console.log(num1 > num2); //greater than
// console.log(num1 <= num2); //less than or equal to
// console.log(num1 >= num2); //greater than or equal to 
// console.log(!true); //not true
// console.log(!false); //not false.  ! means not
// console.log(num1 == num3);




// console.log(num1 === num3); // equality check
// console.log(word1 === word2); 
// console.log(word1 != word2);  //not equal to 

// //CONTROL FLOW
// let item = "U2";
// if (item === "Annapurna") {
//     console.log("Buy Annapurna");
// } else if (item === "U2"){
//     console.log("Buy U2");
// }
// else {
//     console.log ("Buy Rocky Salt");
// }

// // grading system

// let score = 160;

// if(score >=0 && score <= 100){
        
// if(score >= 90) {
//     console.log("Excellent");
// } 

// else if (score >= 80 ){
// console.log( "Very good");
// }

// else if (score >= 70){
//     console.log ("Good");
// }

// else if ( score >= 60){
//     console.log ("Average");
// }

// else if ( score >= 50){
//     console.log ("Credit");
// }

// else if ( score >= 40){
//     console.log("pass");
// }

// else if (score>= 30){
//     console.log("fail");
// }

// }
// else  {
//  console.log("please enter a valid number");
// }

// FUNCTION

// addition
// function sum (x, y){
//     console.log(x + y);
// }
// sum (10,5)

// // subtraction
// function subtract (a , b){
//  console.log(a - b);
// }
// subtract (20 , 10);

// // multiplication
// function multiply (x , y){
//  console.log(x * y);
// }
// multiply(30 , 30);
 
// // division
// function divide (x , y){
//     console.log(x / y);
// }
// divide(30 , 2);

// // modulo
// function modulo (x , y){
//     console.log(x % y);
// }
// modulo(7 , 2);


// function sum (x , y){
//     console.log(x + y);
// }
// sum(100 , 50);
// sum(20 , 4);
// sum(40 , 8);

// 

// RETURN VALUES 

// function sum (a , b){
//     let total = a + b;
//     return total;
// }

// let x = sum(5 , 6);
// let y =sum(10 , 5);
// let z =sum(10 , 9);

// console.log(z);

// function multiply (a ,b){
//     let total = a * b;
//     return total;
// }

// let x =multiply(10 , 10);
// let y =multiply(20 , 5);
// let z =multiply(2 , 5);

// console.log(z);

// function modulo (a , b){
//     let total = a % b;
//     return total;
// }

// let x =modulo(9 , 3);
// let y =modulo(13 , 5);
// let z =modulo(20 , 7);

// console.log(z)
 
// DEFAULT VALUES
// function sum (a=4 , b=2){
//     let total = a + b;
//     return total;
// }

// let x =sum();

// console.log(x); 

// OR

//  function sum (u , w=5){
//     let total = u + w;
//     return total;
// }

// let v =sum(8);

// console.log(v);


// LOOPS (for , while , do)

// for (initiatization;condition;increment){
//     body
// }


// for (let i = 1 ; i <= 100 ; i ++){
//     console.log(i + ". I will not talk in class again");
// }

// // while loop

// let num = 1;
// while (num <= 10){
//     console.log(num);
//     num = num + 1;
// }

// DO... WHILE LOOP

// let age = 1;
// do {
//     console.log(age + ". You can't vote");
//     age++;
// } while(age < 18);

// DECLARING ARRAYS- use of

let ages = [ 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 30 , 18 ];

// for (let age of ages){
//     console.log(Math.pow( age , 2 ));
// }


// let identifier => ( )-if your number is 1 you dont need parenthesis , if notn use it
// if your code is not one line put the property and value in =>{}
// filter , find , map

// FILTER

// let marraige = ages.filter((num)=> num > 25);

// console.log(marraige);

// let marraige = ages.filter((mark)=> mark > 25);

// console.log(marraige);

// MAP

// let squares = ages.map(age => age * age);

// console.log (squares)

// FIND

let x =ages.find((age)=>age===18);
console.log(x);

