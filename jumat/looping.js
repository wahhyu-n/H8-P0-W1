console.log('1. Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA');
var while1=2;

while(while1 <= 20){
    console.log(while1 + ' - I love coding');
    while1+=2;
}

console.log('LOOPING KEDUA');
var while2=20;

while(while2 >=2){
    console.log(while2 + '- I will become fullstack developer');
    while2-=2;
}

console.log('\n2. Melakukan Looping Menggunakan For');
console.log('LOOPING PERTAMA');
for(var for1=1; for1<=20; for1++){
    console.log(for1 + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var for2=20; for2>=1; for2--){
    console.log(for2 + ' - I will become fullstack developer');
}

console.log('\n3. Angka Ganjil dan Genap');
for(var angka=1; angka<=100; angka++){
    if(angka%2==0){
    //console.log('counter sekarang = '+angka);
    console.log('counter sekarang = '+angka+'\noutput = GENAP');
}else{
    console.log('counter sekarang = '+angka+'\noutput = GANJIL');
}
}

/*console.log('\nKelipatan 2');
for(var angka2=1; angka2<=100; angka2+=2){
    if(angka2%2==0){
        console.log('counter sekarang = '+angka2+'\noutput = '+angka2+ ' kelipatan 2');
    }else{
        console.log('counter sekarang = '+angka2+'\noutput = ""');
    }
}*/

console.log('\nKelipatan 3')
for(var kelipatan3=1; kelipatan3<=100; kelipatan3+=2)
    if(kelipatan3%3==0){
        console.log('counter sekarang = '+kelipatan3+'\noutput = '+kelipatan3+ ' kelipatan 3');
    }else{
        console.log('counter sekarang = '+kelipatan3+'\noutput = ""');
    }

console.log('\nKelipatan 6')
for(var kelipatan6=1; kelipatan6<=100; kelipatan6+=5)
    if(kelipatan6%6==0){
        console.log('counter sekarang = '+kelipatan6+'\noutput = '+kelipatan6+ ' kelipatan 6');
    }else{
        console.log('counter sekarang = '+kelipatan6+'\noutput = ""');
    }

console.log('\nKelipatan 10')
for(var kelipatan10=1; kelipatan10<=100; kelipatan10+=9){
    if(kelipatan10%10==0){
        console.log('counter sekarang = '+kelipatan10+'\noutput = '+kelipatan10+ ' kelipatan 10');
    }
    else{
        console.log('counter sekarang = '+kelipatan10+'\noutput = ""');
    }
}