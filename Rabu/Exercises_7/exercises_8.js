/**
 * Segitiga sama sisi dan terbalik 
 * penggabungan dua segita / mirroring
 * ouput 1:         *
 *                 ***
 *                *****
 *               *******
 *              *********
 * 
 * output 2:    *********
 *               *******
 *                *****
 *                 ***
 *                  * 
 */

function ketupat(row) {
    var row1 = row-1;
    return segitiga(row) + segitigaTerbalik(row1);
}

// function rowKetupatKeRowSegitiga(row) {
//     row = (row/2
// }

function segitiga(row) {
    for (var i = 0; i < row; i++) {
        var hasil = '';
        for (var j = 0; j < ((row - 1) -i); j++) {
            hasil += '-';
        }
        for (var k = 0; k < (i + 1); k++) {
            hasil += '*';
        }
        for (var l = 0; l < i; l++) {
            hasil += '*';
        } 
        console.log(hasil);
    }
}
function segitigaTerbalik(row) {
    for (var i = 0; i < row; i++) {
        var hasil = '';
        hasil += ' ';
        for (var j = 0; j < i; j++) {
            hasil += '-';
        }
        for (var k = 0; k < (row-i); k++) {
            hasil += '*';
        }
        for (var l = 0; l < ((row-1)-i); l++) {
            hasil += '*';
        }
        console.log(hasil);
    }
}

ketupat(5);