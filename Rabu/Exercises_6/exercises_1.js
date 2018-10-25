/**
 * H8_P0_W2_E6
 * Berlatih Perulangan di JavaScript
 * ========
 */

// ========[1]
// ========[1.1]
var limit1 = 21;
// var tampung1 = 0;
var awal = 0;
while (awal < limit1) {
    if (awal < 2) {
        console.log("LOOPING PERTAMA");
    } else {
        // tampung1 += awal;
        console.log(awal + ' - ' + 'I love coding');
    }
    awal += 2; // awal = awal + 2;
}
// ========[1.2]
var limit2 = 0;
var awal2 = 22;
while (awal2 > limit2) {
    if (awal2 > 20) {
        console.log("LOOPING KEDUA");
        // awal2 = 22;
    } else {
        console.log(awal2 + ' - ' + 'I will become fullstack developer');
    }
    awal2 -= 2;
}
console.log('----------------------------------------------');

// ========[2]
// ========[2.1]
var limit3 = 21;
for (var i = 0; i < 21; i++) {
    if (i < 1) {
        console.log('LOOPING PERTAMA');
    } else {
        console.log(i + ' - I love coding');
    }
}

// ========[2.2]
var limit4 = 0;
for (var i = 21;i > limit4; i--) {
    if (i > 20) {
        console.log('LOOPING KEDUA');
    } else {
        console.log(i + ' - I will become fullstack developer');
    }
}
console.log('----------------------------------------------');

// ========[3]
// ========[3.1]
console.log('Perulangan 1 - 100 counter 1 dan Genap Ganjil');
// var limit5 = 100;
var counter5 = 0;
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
for (var i = 1; i <= 100; i+=2) {
    if (i % 3 == 0) {
        console.log('counter sekarang: ' + i + ' - kelipatan 3');
    } else {
        console.log('counter sekarang: ' + i);
    }
}

// ========[3.3]
console.log('Perulangan 1 - 100 counter 5 kelipatan 6');
for (var i = 0; i <= 100; i += 5) {
    if (i % 6 == 0) {
        console.log('counter sekarang: ' + i + ' - kelipatan 6');
    } else {
        console.log('counter sekarang: ' + i);
    }
}
// ========[3.3]
console.log('perulangan 1 - 1000 counter 9 kelipatan 10');
for (var i = 0; i <= 100; i += 9) {
    if (i % 10 == 0) {
        console.log('counter sekarang: ' + i + ' - kelipatan 10');
    } else {
        console.log('counter sekarang: ' + i);
    }
}




