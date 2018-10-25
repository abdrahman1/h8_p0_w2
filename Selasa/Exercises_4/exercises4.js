var hari = 21;
var bulan = 12;
var tahun = 230000;
var pilihBulan;
switch (bulan) {
    case 1:
        pilihBulan = console.log("January");
        break;
    case 2:
        pilihBulan = console.log("February");
        break;
    case 3:
        pilihBulan = console.log("Maret");
        break;
    case 4:
        pilihBulan = console.log("April");
        break;
    case 5:
        pilihBulan = console.log("Mei");
        break;
    case 6:
        pilihBulan = console.log("Juni");
        break;
    case 7:
        pilihBulan = console.log("Juli");
        break;
    case 8:
        pilihBulan = console.log("Agustus");
        break;
    case 9:
        pilihBulan = console.log("September");
        break;
    case 10:
        pilihBulan = console.log("Oktober");
        break;
    case 11:
        pilihBulan = console.log("November");
        break;
    case 12:
        pilihBulan = console.log("December");
        break;
    default:
        console.log("Tidak ada bulan ke-13");
}
if (tahun >= 1900 && tahun <= 2200) {
    console.log("\ttangal yang dipilih: ");
    console.log("\t" +hari +" "+ pilihBulan + " " + tahun);
} else {
    console.log("tahun harus lebih dari 1900 dan kurang dari 2200");
}
