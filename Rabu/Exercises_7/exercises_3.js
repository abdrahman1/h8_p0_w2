/**
 * looping pola segitiga setengah segita arah kanan / siku kiri
 * output 1:    *
 *              **
 *              ***
 *              ****
 *              *****
 * output 2:    *----
 *              **---
 *              ***--
 *              ****-
 *              *****
 */

function setengahSegitigaKanan(row) { // tergantung index i
    for(var i=0; i<row; i++) {
        var hasil = '';
        for(var j=0; j<(i+1); j++) {
            hasil += '*';
        } 
        console.log(hasil);
    }
}
setengahSegitigaKanan(5);

function setengahSegitigaKanan2(row) { // loop nomor 1 dibuat kubus loop
    for (var i=0; i<row; i++) {
        var hasil = '';
        for (var j=0; j<(i+1); j++) {
            hasil += '*';
        }
        for (var k=0; k<((row-1)-i); k++) {
            hasil += '-';
        }   
        console.log(hasil);
    }
    
}
setengahSegitigaKanan2(5);