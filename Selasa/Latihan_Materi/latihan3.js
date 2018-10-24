/**
 * Loop / Iteration
 * While-Loop
 * For-Loop
 */
console.log('WHILE-LOOP');
// while loop
// contoh 1
var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
    console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
    
    flag++; // Mengubah nilai flag dengan menambahkan 1

}
console.log('\n')
/**
 * 'flag++' sama dengan 'flag = flag + 1'
 * 'flag--' sama dengan 'flag = flag - 1'
 */
// contoh 2 looping mengembalikan angka total
var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0.
    jumlah += deret; // menambahkan nilai variable  jumlah dengan angka deret.
    deret--;
    console.log('Jumlah saat ini: ' + jumlah);
    
}
console.log('jumlah Terakhir: ' + jumlah);

/**
 * 'jumlah += deret' sama dengan 'jumlah = jumlah + deret'
 */

console.log('============================');
console.log('FOR-LOP');

// FOR - LOP
// Contoh 1
for (var angka = 1; angka < 10; angka++) {
    console.log('Iterasi ke-' + angka);
}
console.log('\n');
//contoh mengembalikan angaka total
var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
    jumlah += deret;
    console.log('jumlah saat ini: ' + jumlah);
}
console.log('jumlah terakhir: ' + jumlah);
console.log('-------------')

// contoh 3 loping dengan increment dan decrement lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
    console.log('Iterasi dengan Increment counter 2: ' + deret);
}
console.log('-----------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
    console.log('Iterasi dengan Decrement counter 2: '  + deret);
}

/**
 * waspadai forever looping
 * var flag = 1;
 * while(flag < 10) { //loop akan terus berjalan, karena nilai flag tidak pernah berubah
 *  console.log('Iterasi ke-' + flag);
 * }
 */

 