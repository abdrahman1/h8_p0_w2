/**
 * String pada JavaScript
 */

 var title = 'nama kamu';
// mengambil huruf terakhir dari string
 console.log(title[0]); //y
// =====
// tentang string
// =====
 console.log(title[title.length - 1]); // u
 // memaksa perubahan nilai di posisi 0
 title[0] = 'T'; // tidak ada perubahan

 title = 'Nama Saya'; // assign keseluruhan string
 console.log(title);
// menambah string dengan '+'
title = title + ' is Bento'; console.log(title);
// =====
// String Properties
// =====
// .length

var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
console.log(name.length); // 42

// =====
// String Method
// =====
// .charArt([indexs]) mengembalikan karakter pada indeks yang diingikan
console.log('I am a string'.charAt(3)); // 'm'

// .concat([string]) menggabungkan beberapa string dan mengembalikannya dan mengembalikannya menjari string baru.
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck
// .indexOf([string/karakter])
// mengembakikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.
var text = 'dung dung ces!';
console.log(text.indexOf('dung')); // 0
console.log(text.indexOf('u')); // 1
console.log(text.indexOf('jreng')); // -1

var text = 'bunga mawar';
console.log(text.indexOf('mawar')); // m dari mawar ada di index 6
console.log(text.indexOf('bunga')); // b dari bunga ada di index ke 0
// .substr => .substr([indeks awal]), [indeks akhir (optional)]) mengambil potongan string
var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport
var kata1 = 'selamat pagi';
var subKata1 = kata1.substr(8);
console.log(subKata1);
// toUpperCase() string diuah menjadi huruf kapital
var letter = 'This Letter Is For You';
var upper = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU
// .toLowerCase - string menjadi huruf kecil
var lower = letter.toLowerCase();
console.log(lower); // this letter is for you

// .trim - karakte whitespace dihapus dari string
var username = ' administrator '; console.log(username);
var newUsername = username.trim(); console.log(newUsername);

// Typecasting To and From String
// Mengubah data dari suatu tipe data ke tipe data yang lain.
// String angka/array
var int = 12;
var real = 3.45;
var arr = [6,7,8];
var strInt = String(int);
var strReal = String(real);
var strArr = String(arr);
console.log(strInt); // '12'
console.log(strReal); // '3.45'
console.log(strArr); // '6,7,8'
// .toString
var number = 21;
console.log(number.toString()); // '21'
var array = [1, 2];
console.log(array.toString());
// Number([String])
var number1 = Number('90'); 
var number2 = Number('1.23');
var number3 = Number('4.5');
var number4 = Number('Bukan Angka')
console.log(number1, number2, number3, number4);

// parseInt([String]) dan parseFloat([String])
var int = '89';
var real = '56.7';
var strInt_1 = parseInt(int); // strInt_1 = 89
var strInt_2 = parseInt(real);
console.log(strInt_1, strInt_2);
var strReal_1 = parseFloat(int); 
var strReal_2 = parseFloat(real); 
console.log(strReal_1, strReal_2);