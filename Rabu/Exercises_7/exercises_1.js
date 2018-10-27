/**
 * H8_P0_W2_E7
 * Perulangan - Play with Asterisks
 * ========
 */

// ========[1]
console.log('1. menyusun barisan bintang');
// var row1 = 5;
// // hasil = '';
// for (var i = 0; i < 5; i++) {
//     // hasil += '*';
//     console.log('*');
// }
var row = 5;
var col = 1;
for (var i = 0; i < row; i++) {
    // hasil = '';
    for (var j = 0; j < col; j++) {
        // hasil += '*';
        console.log('*');
    }
    // console.log(hasil);
}
console.log('2. b. bintang nested loop');

var row2 = 5;
var col2 = 5;
for (var i = 0; i < row2; i++) {
    var hasil = "";
    for (var j = 0; j < col2; j++) {
        // process.stdout.write('*');
        hasil += '*'    
    }
    console.log(hasil);
    // process.stdout.write('\n');
}

// ========[3]
// menyusun barisan tangga
console.log('3. menyusun barisan tangga');
var row3 = 5;
for (var i=0; i<row3; i++) {
    var hasil2 = '';
    for (var j=0; j<i+1; j++) {
        // process.stdout.write('*');
        hasil2 += '*';
    }
    console.log(hasil2);
    // process.stdout.write('\n');
}


