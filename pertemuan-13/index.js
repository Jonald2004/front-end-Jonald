//Rest Parameter dan Spread Operator 

//1. Rest Parameter
const func1 =  (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};

func1("A", "B", "C", "D", "E");

//Dengan res parameter (tipe nya Array)
const func2 = (...params) => {
    console.log(params);
};
func2("A", "B", "C", "D", "E");

//rest parameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...param) => {
    console.log(param);
    console.log(param1, param2);
};
func3("A", "B", "C", "D", "E");

//Mini Exercise
const penjumlahan = (a, b, c, d, e, f) => {
    let arr = [a, b, c, d, e, f];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6));


//2. Spread Operator 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Array 
//1. Duplikasi array
let numbers2 = [numbers];
numbers.push(6);
console.log(numbers2);