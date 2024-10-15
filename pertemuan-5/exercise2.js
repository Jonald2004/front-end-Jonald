//Ubah exercise 1 dari function biasa menjadi
//IIFE dan callback
//KAPARANG, JONALD FILEMON

//IIFE
let bmi = (function(berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    return bmi;
})(90, 1.7);

//callback
function tampilkanBMI(bmi){
    console.log("BMI anda adalah: " + bmi);
}

//panggil
tampilkanBMI(bmi);