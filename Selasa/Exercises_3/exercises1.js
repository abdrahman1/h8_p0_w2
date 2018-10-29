var nama = 'John';
var pilihPeran = 'Ksatria';
var peran;
var ket;
console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
if (pilihPeran == 'Ksatria' || pilihPeran == 'ksatria') {
    peran = 'Ksatria';
    ket = 'kamu dapat menyerang dengan senjatamu';
} else if (pilihPeran == 'Tabib' || pilihPeran == 'tabib') {
    peran = 'Tabib';
    ket = 'kamu akan membantu temanmu yang terluka';
} else if (pilihPeran == 'Penyihir' || pilihPeran == 'penyihir') {
    peran = 'Penyihir';
    ket = 'ciptakan keajaiban yang membantu kemenangan!';
} else {
    ket = 'Pilih peranmu untuk memulai game';
}
if (pilihPeran == peran) {
    console.log('Selamat datang di Dunia Proxytia, '+nama+'.\nHalo '+peran+' '+nama+', '+ket+'.');
} else {
    console.log('Selamat datang di Dunia Proxytia, '+nama+'.\nHalo '+nama+', '+ket+'.');
}
