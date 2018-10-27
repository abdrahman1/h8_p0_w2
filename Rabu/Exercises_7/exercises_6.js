/**
 * setengah segitiga arah kiri terbalik
 * output:  ******
 *          -*****
 *          ---***
 *          ----**
 *          -----*
 */

function setengahSegitigaKiriTerbalik(row) {
    for (var i=0; i<row; i++) {
        var hasil = '';
        for (var k=0; k<i; k++) {
            hasil += '-';
        }
        for (var j=0; j<row-i; j++) {
            hasil += '*';
        }
        console.log(hasil);
    }
}

setengahSegitigaKiriTerbalik(5);
