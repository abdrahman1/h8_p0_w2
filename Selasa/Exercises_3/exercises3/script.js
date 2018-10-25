/**
 * h8_p0_w2_e3
 * jalankan di repl atau browser
 */

console.log('\t\tSelamat datang di game dystopi \n')
var promptPlay = false;
var peran1 = 'Ksatria';
var peran2 = 'Tabib';
var peran3 = 'Penyihir';
var senjata;
while (promptPlay == false) {
    var isPeran = false;
    var isPlay = prompt('Apa kamu pemain baru? [Y]/[N]');
    if (isPlay == 'y' || isPlay == 'Y') {
        while (isPeran == false) {
            var userPeran = prompt('Pilih peran kamu? \t[1] Kstaria \t[2] Tabib \t[3] Penyihir');
            if (userPeran == 1) {
                userPeran = peran1;
                console.log('kamu memilih peran ' + userPeran);
                isPeran = true;
            } else if (userPeran == 2) {
                userPeran = peran2;
                console.log('kamu memilih peran ' + userPeran);
                isPeran = true;
            } else if (userPeran == 3) {
                userPeran = peran3;
                console.log('kamu memilih peran ' + userPeran);
                isPeran = true;
            } else {
                alert('kamu belum memilih peran');
                isPeran = false;
            }
        }
        if (userPeran == peran1) {
            var senjata = 'kamu dapat menyerang dengan senjatamu';
        } else if (userPeran = peran2) {
            var senjata = 'kamu akan membantu temanmu yang terluka';
        } else if (userPeran = peran3) {
            var senjata = 'ciptakan keajaiban keajaiban yang membantu kemenanganmu!';
        } else {
            console.log('tidak ada peran');
        }
        console.log('peran terpilih');
        var isNama = false;
        while (isNama == false) {
            var userNama = prompt("Namai dirimu");
            if (userNama != null) {
                isNama = true;
            } else {
                alert("Isikan nama kamu");
                isNama = false;
            }
        }
        console.log('nama user: ' + userNama);
        console.log('peran: ' + userPeran);
        alert('pemilihan peran selesai');
        alert(
            '**SUMMARY** \n============ \nHalo ' + userPeran + ' ' + userNama + ', ' + senjata
        );
        promptPlay = true;

    } else {
        console.log('kamu memilih untuk tidak bermain');
        alert("Kamu tidak jadi memulai baru");
        promptPlay = true;

    }


}

console.log("------------------");
console.log("PROGRAM SELESAI");