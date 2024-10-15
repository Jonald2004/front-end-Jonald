// Array & object
//1. Array
//Deklarasi Variable array
//Cara 1. Array literal
// let Numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// //cara 2. kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//Tipe data dalama array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; //stirng
// let John = ["John", 30, true, [80, 90, 100]]; //Campuran
// console.log(john);

// //Array length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// //Mengaksses element tertentu dalam array
// //Melalui index. index selalu dimulai dari 0
// console.log(numbers[2]); //3
// console.log(numbers[1]); //Jane
// console.log(john[3]); //80, 90, 100
// console.log(john[3][1]); //90

//Mengakses element terakhir dalam array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.length)//10
// console.log(numbers[numbers.length - 1]);

// //Array Method
// let array = [1, 2, 3, "hallo", false, true];
// console.log(array);
// //1. toString
// console.log(array.toString());
// //2. Join
// console.log(array.join(" "));
// console.log(array.join("_"));
// //3. Pop()
// array.pop();
// console.log(array);
// //4. push()
// array.push("Selamat pagi");
// console.log(array);
// //5 shift()
// array.shift();
// console.log(array);
// //6. unshift()
// array.unshift("selamat pagi");
// console.log(array);
// //7. splice()
// array.splice(3, 0, 4, 5);
// console.log(array);
// //8 Concatination()
// let buah = ["Pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);
// console.log(makanan);
// //9. slice()
// let sayuran = makanan.slice(3, 6);
// console.log(sayuran);