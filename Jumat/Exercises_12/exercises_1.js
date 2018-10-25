/**
 * H8_P0_W2_E11
 * Logic Challenge - Konversi Menit
 */

// var jam;
// var menit;
function konversiMenit(bil) {
    return angkaJam(bil) + ':' + angkaMenit(bil)
}

function angkaJam(bil) {
    var jam = Math.floor(bil / 60);
    return jam;
}

function angkaMenit(bil) {
    var menit = bil % 60;
    return menit;
}


console.log(konversiMenit(63));
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log(konversiMenit(30));