function halo(){
    alert("Halo Javascript");
}
function waktu(){
    document.getElementById('waktu').innerHTML=Date();
}
function zodiak(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;
    let zodiak="kurang tau";
    if(bulan==1){
        if(tanggal>0 && tanggal<31){
            zodiak="Leo";
        }
        if(bulan==2){
        if(tanggal>0 && tanggal<31){
            zodiak="Pisces";
        }
        if(bulan==3){
        if(tanggal>0 && tanggal<31){
            zodiak="Aries";
        }
    }
    document.getElementById('zodiak').innerHTML=zodiak;
}
}
  zodiak.addEventListener("mouseover",coba);
}
function kali(){
    let a=document.getElementById('bil1').value;
    let b=document.getElementById('bil2').value;
    let hasil=a*b;
    document.getElementById('hasill').innerHTML=hasil;
}
function tambah(){
    let a=document.getElementById('bil1').value;
    let b=document.getElementById('bil2').value;
    let hasil= parseInt(a)+parseInt(b);
    document.getElementById('hasil').innerHTML=hasil;
}

let btn=document.getElementById('waktu');

btn.onclick=waktu();

btn.onclick=function(){
    document.getElementById('waktu').innerHTML=Date();
}
let isi=document.getElementById('ketik');
let tampil=document.getElementById('waktu');
isi.onmouseover=function(){
    tampil.innerHTML=isi.value;
}
let hari=document.getElementById('hari');
hari.addEventListener("mouseover",coba);

function coba(){
    alert("coba coba");
}