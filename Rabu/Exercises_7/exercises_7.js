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

function setengahKetupatKanan(row1, row2) {
    var hasil = setengahSegitigaKanan(row1) + '\n'+setengahSegitigaKananTerbalik(row2);
    return hasil;
}

function setengahSegitigaKanan(row) {
    for (var i=0; i<row; i++) {
        var hasil = '';
        for (var j=0; j<(i+1); j++) {
            hasil += '*';
        }
        // hasil += '|';
        for (var k=0; k<((row-1)-i); k++) {
            hasil += ' ';
        }
        var h = console.log(hasil);
    }
    return h;
}

function setengahSegitigaKananTerbalik(row) {
    for (var i=0; i<row; i++) {
        var hasil = '';
        for (var j=0; j<(row-i); j++) {
            hasil += '*';
        }
        for (var k=0; k<(i); k++) {
            hasil += ' ';
        }
        // hasil += '|';
        console.log(hasil);
    }
    return '';
}
console.log(setengahKetupatKanan(5, 6));

 

 