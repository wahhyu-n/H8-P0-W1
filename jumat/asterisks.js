console.log('1. Menyusun Barisan Bintang')

var rows1= 5;
var rowsx= 1;

while(rowsx<=5){
    console.log('*')
    rowsx++;
}
/*for(rowsx=1;rowsx<=5;rowsx++){
    console.log('*');
}*/

console.log('\n2. Menyusun Barisan Bintang Dengan Nested Looping')

var rows2= 5;
for(var x=1; x<=5; x++){
    output='';
    for(var y=1; y<=5; y++){
        output+='*';
        //console.log(output);
    }
    console.log(output);
}

console.log('\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping')

var rows3= 5;
for(var x=1; x<=rows3; x++){
    output='';
    for(var y=1; y<=x; y++){
    output+='*';
    }
    console.log(output);
}
