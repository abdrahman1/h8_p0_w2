/**
 * H8_P0_W2_E13
 * Logic Challenge - X dan O
 *  
 */

function xo(str) {
    var strX = cariX(str);
    var strO = cariO(str);
    if (strX == strO) {
        return true;
    } else {
        return false;
    }
}

function cariX(str) {
    var tamCariX = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'x' || str[i] == 'X') {
            tamCariX += str[i];
        } 
        
    }
    return jumCariX = tamCariX.length;
   
}

function cariO(str) {
    var tamCariO = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'o' || str[i] == 'O') {
            tamCariO += str[i];
        }
    }
    return jumCariO = tamCariO.length;
}
console.log(xo('xoxoxo'));
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true