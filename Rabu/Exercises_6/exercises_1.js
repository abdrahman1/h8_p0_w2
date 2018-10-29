/**
 * H8_P0_W2_E6
 * Berlatih Perulangan di JavaScript
 * ========
 */

// ========[1]
// ========[1.1]
console.log('WHILE LOOP==============================[1]')
console.log('LOOPING PERTAMA');
var limit1 = 20;
var awal = 1;
while (awal <= limit1) {
    console.log(awal + ' - I love coding');
    awal += 1; // awal = awal + 1;
}
// ========[1.2]
console.log('LOOPING KEDUA');
var limit2 = 1;
var awal2 = 20;
while (awal2 >= limit2) {
    console.log(awal2 + ' - ' + 'I will become fullstack developer');
    awal2 -= 1;
}
console.log('\n');

// ========[2]
// ========[2.1]
console.log('FOR LOOP==============================[2]')
console.log('LOOPING PERTAMA');
var limit3 = 20;
for (var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding');
}

// ========[2.2]
console.log('LOOPING KEDUA');
var limit4 = 1;
for (var i = 20; i >= limit4; i--) {
    console.log(i + ' - I will become fullstack developer');
}
console.log('\n');

// ========[3]
// ========[3.1]
console.log('ANGAKA GANJI GENAP==============================[3]')
console.log('Perulangan 1 - 100 counter 1 dan Genap Ganjil');
// var limit5 = 100;
var counter5 = 1;
var limit5 = 100;
for (var awal5 = 1;awal5 <= limit5;awal5++) {
    // counter5 += awal5 // counter5 = counter5 + awal5;
    if (awal5 % 2 == 0) {
        console.log('counter sekarang: ' + awal5 + ' - Genap');
    } else {
        console.log('counter sekarang: ' + awal5 + ' - Ganjil');
    }
}

// ========[3.2]
console.log('Perulangan 1 - 100 counter 2 kelipatan 3');
for (var i = 1; i < 100; i+=2) {
    if (i % 3 == 0) {
        console.log('counter sekarang: ' + i + ' - kelipatan 3');
    } else {
        console.log('counter sekarang: ' + i);
    }
    // console.log('counter sekarang: '+i);
}

// ========[3.2]
console.log('Perulangan 1 - 100 counter 5 kelipatan 6');
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 == 0) {
        console.log('counter sekarang: ' + i + ' - kelipatan 6');
    } else {
        console.log('counter sekarang: ' + i);
    }
}
// ========[3.3]
console.log('perulangan 1 - 1000 counter 9 kelipatan 10');
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 == 0) {
        console.log('counter sekarang: ' + i + ' - kelipatan 10');
    } else {
        console.log('counter sekarang: ' + i);
    }
}