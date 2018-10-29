/**
 * 
 * 
 */
function polaMistarTengah(row) {
    if (row % 2 == 0) {
        var mid1 = (row / 2) - 1;
        var mid2 = row / 2;
    } else {
        mid1 = Math.floor(row / 2);
    }
    var hasil = '';
    for (let i = 0; i < row; i++) {
        // var hasil = '';
        for (let j = 0; j < row; j++) {
            if (j == 0 || j == (row - 1)) {
                hasil += '|';

            } else if (i == mid1 || i == mid2) {
                if (j > 0 && j < row-1) {
                    hasil += '-';
                }
            } else {
                hasil += ' ';
            }
        }
        hasil += '\n';
        // console.log(hasil);
    }
    console.log(hasil);
}

function polaTiangTengah(row) {
    // Put your code here
    var result = '';
    if (row % 2 == 0) {
        var mid1 = (row / 2) - 1;
        var mid2 = row / 2;
    } else {
        mid1 = Math.floor(row / 2);
    }
    // var rowAdd2 = row + 2;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < row; j++) {
            if (i == 0 || i == row - 1) {
                result += '|';
            } else if (j == mid1 || j == mid2) {
                if (i > 0 && i < row - 1) {
                    result += '-';
                }
            } else {
                result += ' ';
            }


        }
        result += '\n';
    }
    console.log(result);
}
polaMistarTengah(5);
polaMistarTengah(8);
polaTiangTengah(5);
polaTiangTengah(6);
polaTiangTengah(9);
