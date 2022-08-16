// and we are now onto arrow functions this might seem difficult at first but it is actually quite easy
//const example = parameter=> 'parameter';
//console.log(example(parameter));
// do not understand what the issue is

const twoAdder = t => t + 3
console.log(twoAdder(5));

const retry = parameter => console.log(parameter+4);
retry(5);
// please note that the automatic return is only available if you only have one expression

//apparently arrow functions are used in iterator methods
//another array method is .map
// which takes a function as an argument

//const nums = '1 2 3 '
//nums.split
//console.log(nums);

// do not know how the split string method works not that it matters 
const nums = [1,2,3];
const squares = nums.map(x => x**2);
console.log(squares);
console.log(nums);

//the argument being passed to the map function above is an arrow function 
// each value is passed as an argument
// it seems i am just going to have to be hitting the backspace with

// and then there are more dom elements
// i guess this means i will have to go over this shit again once i am done with the dom stuff

let divide = function(){
    return 2000/100
   };


let square = parameter => parameter*parameter;
let add = (parameter1,parameter2) => parameter1 + parameter2;

