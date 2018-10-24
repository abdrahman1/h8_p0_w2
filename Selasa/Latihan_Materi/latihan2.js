/** 
 * CONDITIONAL 
 * IF, IF-ELSE, ELS-IF Statement 
 * SWITCH CASE Statement
 * 
*/


var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

var tampung2 = 3;
if(tampung2 == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung2 < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}