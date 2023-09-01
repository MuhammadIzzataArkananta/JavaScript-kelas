/*let a=2;
let b=3;
let c=a+b;
console.log(c);
*/


let a=2;
let b=3;
let c=4;
let d=5;
let e= ((b+a)*c)/(a*b*b)+a-d;
//3+2*4/2*3*3+2-5;
console.log(e);

let x=93;
let y=80;
let hasil=x>y;
if(x>y){
    console.log("lulus");
}else{
    console.log("ga lulus ");
}



let bulan=5;
let tanggal=11;
let zodiak="belum dibuat";

if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="aquarius";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="taurus";
    }

}
if(bulan==2){
    if(tanggal>0 && tanggal<20){
        zodiak="leo";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="aries";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<20){
        zodiak="pisces";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="capricorn";
    }
}
if(bulan==4){
    if(tanggal>0 && tanggal<20){
        zodiak="cancer";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="virgo";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal<20){
        zodiak="libra";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="sagitarius";
    }
}
if(bulan==6){
    if(tanggal>0 && tanggal<20){
        zodiak="gemini";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="scorpio";
    }
}    
console.log(zodiak);