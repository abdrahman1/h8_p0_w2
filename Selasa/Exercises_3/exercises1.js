var nama = 'John';
var pilihPeran = 'Tabib';
var peran;
var ket;
console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
if (pilihPeran == 'Kstatria') {
    peran = 'Ksatria';
    ket = 'kamu dapat menyerang dengan senjatamu';
} else if (pilihPeran == 'Tabib') {
    peran = 'Tabib';
    ket = 'kamu akan membantu temanmu yang terluka';
} else if (pilihPeran == 'Penyihir') {
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
