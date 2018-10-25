function xo(str) {

}
function cariX(str) {
    var tamCariX = '';
    for (var i = 0; i < str.length-1; i++) {
        tamCariX += str[i];
    }
    jumCariX = tamCariX.length;
    return jumCariX;
}
function cariO(str) {

}
console.log(xo('xoxoxo'));