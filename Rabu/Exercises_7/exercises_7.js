/**
 * setengahKetupatKanan
 * Gabungan setengahSegitigaKanan dan setengahSegitigaKananTerbalik
 * output:  *
 *          **
 *          ***
 *          ****
 *          *****
 *          ****
 *          ***
 *          **
 *          *
 */

function setengahKetupatKanan(row1) {
    var row2 = row1 - 1;
    var hasil = setengahSegitigaKanan(row1) + setengahSegitigaKananTerbalik(row2);
    return hasil;
}

function setengahSegitigaKanan(row) {
    var hasil = '';
    for (var i=0; i<row; i++) {
        // var hasil = '';
        for (var j=0; j<(i+1); j++) {
            hasil += '*';
        }
        // hasil += '|';
        for (var k=0; k<((row-1)-i); k++) {
            hasil += ' ';
        }
        // console.log(hasil);
        hasil += '\n';
    }
    return hasil;
}

function setengahSegitigaKananTerbalik(row) {
    var hasil = '';
    for (var i=0; i<row; i++) {
        // var hasil = '';
        for (var j=0; j<(row-i); j++) {
            hasil += '*';
        }
        for (var k=0; k<(i); k++) {
            hasil += ' ';
        }
        // hasil += '|';
        // console.log(hasil);
        hasil += '\n';
    }
    return hasil;
}
console.log(setengahSegitigaKanan(5));
console.log(setengahSegitigaKananTerbalik(5));
console.log(setengahKetupatKanan(5));

 

 