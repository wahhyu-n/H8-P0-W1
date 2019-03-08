var tanggal=17;
var bulan=8;
var tahun=1945;
var output;


switch(bulan){
  case 1:
    bulan=' Januari ';
  //console.log(tanggal+' Januari '+tahun);
  break;
  case 2:
    bulan=' Februari ';
  break;
  case 3:
    bulan=' Maret ';
  case 4:
    bulan=' April ';
  break;
  case 5:
    bulan=' Mei ';
  break;
  case 6:
    bulan=' Juni ';
  break;
  case 7:
    bulan=' Juli ';
  break;
  case 8:
    bulan=' Agustus ';
  break;
  case 9:
    bulan=' September ';
  break;
  case 10:
    bulan=' Oktober ';
  break;
  case 11:
    bulan=' November ';
  break;
  default:
    bulan=' Desember ';
  break;
}
output = tanggal + bulan + tahun;
  console.log(output);