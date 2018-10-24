/**
 * FUNCTION / METHOD
 * penulisan function:
 * function nama_function(parameter 1, parameter 2, ...)
 */

//  contoh 1 function sederhana
function tampilkan() {
    console.log("halo!");
}

tampilkan();
console.log('------------------');

// contoh 2 function sederhana dengan return
function munculkanAngkaDua() {
    return 2;
}
var tampung = munculkanAngkaDua();
console.log(tampung);
console.log('------------------');

//contoh 3 function dengan parameter
function kalikanDua(angka) {
    return angka * 2;
}
var tampung = kalikanDua(2);
console.log(tampung);
console.log('------------------');

// contoh 4 function Pengiriman parameter lebih dari satu
function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua;
}
console.log(tampilkanAngka(5,5));
console.log('------------------');

// contoh 5 function inisialisasi parameter dengan nilai default
function tampilkanAngkaA(angka = 1) {
    return angka;
}
console.log(tampilkanAngkaA(5));
console.log(tampilkanAngkaA());
console.log('------------------');

/**
 * Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.
 */

//  contoh 6 Anonymous Function
var fungsiPerkalian = function(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua;
}
console.log(fungsiPerkalian(2,4));
console.log('------------------');
