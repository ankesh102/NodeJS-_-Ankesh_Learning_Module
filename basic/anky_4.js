// This is basic Node program 

/*
Kys JS ka console.log aur node ka console.lg same hota hai ?

ANS : nhi... Js me wo web browser ki property hoti hai aur node me ye similar 
functionality ke saath kaam krti hai but ye node ki module hoti hai 
aur ye debugging ke liye use ki jati hai --- > ajise hme bade Projects pe 
pata karna hota hai ki program ki output is point pe kya aa rh hai us samay hme ye use karna hota hai 
*/

var a = 10;
var b = 20;
var c = 30;

console.log(a+b+c);
console.warn(a+b+c);
console.error(new Error("Oops, something went wrong ")); // To display Error 