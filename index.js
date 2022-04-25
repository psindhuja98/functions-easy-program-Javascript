//1.Given a and b, your function should return the value of ab
//Example:
//Input: power(2,3) ––> Output: 8
//answer: 

 //function power(a,b){
 //  return a**b;
// }
//console.log(power(2,3));


//2.Given length of a regular hexagon, your function should return area of the hexagon.
//Example:
//Input: areaOfHexagon(10) ––> Output: 259.80
//answer:

//function areaOfHexagon(s){
 // return  (6*(s*s))/(4*Math.tan(Math.PI/6));
//}
//console.log(areaOfHexagon(10));

//3.Given a sentence, your functions should return the number of words in the sentence.
//Example:
//Input: noOfWords(We are alchemyst) ––> Output: 3

//answer:
//function noOfWords(str){
  //return str.split(' ').length;
   
//}
//console.log(noOfWords ('We are alchemyst'));

//4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
//Example:
//Input: findMin(3,5) ––> Output: 3
//Input: findMin(3,5,9,1) ––> Output: 1
//(Hint: Lookup rest parameters in JavaScript)
//function findMin(...args){
  //return Math.min(...args);
//}
//console.log(findMin(3,5));
//console.log(findMin(3,5,9,1));

//5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
//Example:
//Input: findMax(3,5) ––> Output: 5
//Input: findMax(3,5,9,1) ––> Output: 9
//(Hint: Lookup rest parameters in JavaScript)

//answer:

//function findMax(...args){
  //return Math.max(...args);
    
 // }
//console.log(findMax(3,5));
//console.log(findMax(3,5,9,1));

//6.Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
//Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

//answer;
//function typeOfTriangle(x,y,z){
  //if((x == y)&&(y == z)){
    //console.log('Equilateral Triangle');
    //}
    //else if((x == y || y ==z || z == x)){
     // console.log('Isosceles Triangle');
    //}
     //else if((x !=y || y!=z || z!=x)){
       //console.log('scalene Triangle');
     //}
     //else{
       //console.log('not a triangle');
     //}
//}
//typeOfTriangle(30,60,90)














