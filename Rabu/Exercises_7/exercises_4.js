/**
 * Setengah segitiga arah kiri / siku kanan
 * output:  ----*
 *          ---**
 *          --***
 *          -****
 *          *****
 */



function setengahSegitigaKiri(row) {
    for (var i = 0; i < row; i++) {
        var hasil = '';
        for (var j = 0; j < ((row - 1) - i); j++) {
            hasil += '-';
        }
        for (var k = 0; k < (i + 1); k++) {
            hasil += '*';
        }
        console.log(hasil);
    }
}

function setengahSegitigaKiri2(row) {
    for (var i = 1; i <= row; i++) {
        var hasil = '';
        for (var j = 1; j <= (row - i); j++) {
            hasil += '-';
        }
        for (var k = 1; k <= i; k++) {
            hasil += '*';
        }
        console.log(hasil);
    }
}
setengahSegitigaKiri(5);
setengahSegitigaKiri2(5);