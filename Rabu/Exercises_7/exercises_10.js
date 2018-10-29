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
                hasil += ' ';
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
            if ((i == 0 || i == row - 1) || (j == 0 || j == row - 1) || (j == i || j == ((row - 1) - i))) {
                hasil += '*';
            } else {
                hasil += ' ';
            }
        }
        console.log(hasil);
    }
}




function polaMistarTengah(row) {
    var mid1 = (row / 2) - 1;
    var mid2 = row / 2;
    var mid3 = Math.floor(row/2);
    var hasil = '';
    for (var i = 0; i < row; i++) {
        // var hasil = '';
        for (var j = 0; j < row; j++) {
            if (j === 0 || j === (row - 1)) {
                hasil += '*';

            } else {
                if (row % 2 == 0) {
                    if (i === mid1 || i == mid2) {
                        if (j > 0 && j < row -1) {
                            hasil += '*';
                            
                        } 
                    } else {
                        hasil += ' ';
                    }
                } else {
                    if (i === mid3) {
                        if (j > 0 && j < row -1) {
                            hasil += '*';
                            
                        } 
                    } else {
                        hasil += ' ';
                    }
                }
                
            }
               
        }
        hasil += '\n';
        // console.log(hasil);
    }
    console.log(hasil);
}

    polaTengahKosong(10);
    console.log('\n');
    polaTengahKosongDiagonal(10);
    console.log('\n');
    polaMistarTengah(6);
    polaMistarTengah(9);