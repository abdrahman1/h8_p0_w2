/**
 * H8_P0_W2_E2  
 */

console.log("\t\tSelamat datang di Proxytia");

var pilihPeran = false;

while (pilihPeran == false) {
    console.log('pilih peran kamu? [1] [2] [3]');
    process.stdin.setEncoding('utf8');
    var userPeran = 1;
    process.stdin.on('readable', function () {
        userPeran = process.stdin.read();
        if (userPeran == 1) {
            pilihPeran = true;
            console.log("Kamu memilih peran");
            
        } else {
            console.log('kamu tidak memilih peran');

        }
        pilihPeran = false;
    });
console.log("peran terpilih");
}