/**
 * 
 */
function segitigaSetengahKetupanKanan(row) {
    var hasil = segitigaSisiKanan(row) + '\n' + segitigaSisiKananBawah(row);
    return hasil;
}

function segitigaSisiKanan(row) {
    for (var i = 0; i < row; i++) {
        var tampung = '';
        for (j = 0; j < i; j++) {
            tampung = tampung + '*';
        }
        console.log(tampung);

    } 
    return '';
}

function segitigaSisiKananBawah(row) {
    var tampung = '';
    for (var i = row; i > 0; i--) {
        tampung = '';
        for (var j = i; j > 0; j--) {
            tampung = tampung + '*';
        }
        console.log(tampung);
    }
    return '';
}
// segitigaSisiKanan(5);
// console.log('------------');
// segitigaSisiKananBawah(5);
segitigaSetengahKetupanKanan(5);

