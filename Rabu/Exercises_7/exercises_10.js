/**
 * 
 */

function polaTengahKosong(row) {
    for (var i = 0; i < row; i++) {
        var hasil = '';
        for (var j = 0; j < row; j++) {
            if ((i == 0 || i == row - 1) || (j == 0 || j == row - 1)) {
                hasil += '*';
            } else {
                hasil += '-';
            }
        }
        console.log(hasil);
    }
    //  console.log(hasil);
    // return  cetak;

}
function polaTengahKosongDiagonal(row) {
    for (var i = 0; i < row; i++) {
        var hasil = '';
        for (var j = 0; j < row; j++) {
            if ((i==0 || i==row-1) || (j==0 || j==row-1) || (j==i || j==((row-1)-i))) {
                hasil += '*';
            } else {
                hasil += ' ';
            }
        }
        console.log(hasil);
    }
}
polaTengahKosong(10);
console.log('---------------');
polaTengahKosongDiagonal(10);