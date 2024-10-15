function hitunganBMI(berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    return bmi;
}

let berat = 70;
let tinggi = 1.7;

let bmi = hitunganBMI(berat, tinggi);
console.log("BMI anda adalah: " + bmi);