/**
 * 
 */

function segitiga(row) {
    for (var i = 1; i <= row; i++) {
        var hasil = "";
        for (var j = 1; j <= (row - i); j++) {
            hasil += "-";
        }
        //  console.log(hasil);
        for (var k = 1; k <= i; k++) {
            hasil += "*";
        }
        // var cetak = hasil;
        for (var l = 1; l <= (i-1); l++) {
            hasil += '*';
        }
        console.log(hasil);
    }
    //  console.log(hasil);
    // return  cetak;
    return '';
}

//  console.log(segitiga(5));
// var segitiga = segitiga(5);
// console.log(segitiga)
segitiga(5);

function segitigaKebalik(row) {
    for(var i = row; i >= 1; i--) {
        var hasil = '';
        for (var j = i; j >= 1; j--) {
            hasil = hasil + '*';
        }
        for (var k = i-1; k >= 1; k--) {
            hasil = hasil + '*';
        }
        for (var l = row - 1; l > i; l--) {
            hasil = hasil + " ";
        }
        console.log(hasil);
    }
}
segitigaKebalik(5);