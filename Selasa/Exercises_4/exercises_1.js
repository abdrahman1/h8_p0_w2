var hari = 31;
var bulan = 12;
var tahun = 1900;
var pilihBulan;
switch (bulan) {
    case 1:
        pilihBulan = 'January'
        break;
    case 2:
        pilihBulan = 'February'
        break;
    case 3:
        pilihBulan = 'Maret'
        break;
    case 4:
        pilihBulan = 'April';
        break;
    case 5:
        pilihBulan = 'Mei';
        break;
    case 6:
        pilihBulan = 'Juni';
        break;
    case 7:
        pilihBulan = 'Juli';
        break;
    case 8:
        pilihBulan = 'Agustus';
        break;
    case 9:
        pilihBulan = 'September';
        break;
    case 10:
        pilihBulan = 'Oktober';
        break;
    case 11:
        pilihBulan = 'November';
        break;
    case 12:
        pilihBulan = 'December';
        break;
    default:
        pilihBulan = 'tidak ada bulan ke 13'
}
if (hari > 31) {
    console.log('jumlah hari tidak lebih dari 31');
} else if(bulan > 12) {
    console.log(pilihBulan);
} else if (tahun < 1900 || tahun > 2200) {
    console.log('masukan tahun antara 1900 - 2200');
} else {
    console.log("\ttangal yang dipilih: ");
    console.log("\t" + hari + " " + pilihBulan + " " + tahun);
}