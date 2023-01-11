//calculating area of triangle using Heron's formula 
var side1 = 14; 
var side2 = 16; 
var side3 = 19; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);