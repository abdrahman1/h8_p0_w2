/**
 * Setengah Segitiga arah kanan terbalik
 * output 1:    *****
 *              ****
 *              ***
 *              **
 *              *
 * output 2:    *****
 *              ****-
 *              ***--
 *              **---
 *              *----
 */

 function setengahSegitigaKananTerbalik(row) {
     for (var i=0; i<row; i++) {
         var hasil = '';
         for (var j=0; j<row-i; j++) {
            hasil += '*';
         }
         console.log(hasil);
     }
 }
 setengahSegitigaKananTerbalik(5);

 function setengahSegitigaKananTerbalik2(row) {
     for (var i=0; i<row; i++) {
         var hasil = '';
         for (var j=0; j<(row-i); j++) {
             hasil += '*';
         }
         for (var k=0; k<i; k++) {
             hasil += '-';
         }
         console.log(hasil);
     }
 }
 setengahSegitigaKananTerbalik2(5);