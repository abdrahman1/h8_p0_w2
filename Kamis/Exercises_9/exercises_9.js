/**
 * H8_p0_w2_E8
 * Mengenal Penggunaan Function
 * ========
 */

// ========[1]
function shoutOut() {
    return 'Halo Function!';
}
console.log(shoutOut());

// ========[2]
function calculateMultiply(num1, num2) {
    var multiply = num1 * num2;
    return multiply;
}
var hasilPerkalian = calculateMultiply(2, 5);
console.log(hasilPerkalian); 

// ========[2]

function processSentence(nama, umur, alamat, hobby) {
    return 'Nama saya '+nama+', umur saya '+umur+' tahun, alamat saya di '+alamat+', dan saya punya hobby yaitu '+hobby
}

var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'Gaming';

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);