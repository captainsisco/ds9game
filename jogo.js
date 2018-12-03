var options={a:null,b:null};
var combat={p:null,t:null,q:null};
var bridge= document.querySelector("audio[src='ds9bridge.mp3']");
var ops= document.querySelector("audio[src='ds9ops.mp3']")
var odo1= document.querySelector("audio[src='odo1.mp3']");
var na_tela= document.querySelector("audio[src='natela.mp3']");
var foster1= document.querySelector("audio[src='foster1.mp3']");
var obrien= document.querySelector("audio[src='obrien1.mp3']");
var sisko_coordenadas= document.querySelector("audio[src='siskocoordenadas.mp3']");
var odocon= document.querySelector("audio[src='odoconfirm.mp3']");
var odoklingons= document.querySelector("audio[src='odoklingons.mp3']");
var red_alert= document.querySelector("audio[src='redalert.mp3']");
var pr= document.querySelector("audio[src='phasersready.mp3']");
var sisko_diario= document.querySelector("audio[src='siskodiario.mp3']");
var siskooptb= document.querySelector("audio[src='siskods9optb.mp3']");
var odofleetreport= document.querySelector("audio[src='odofleetreport.mp3']");
var badending= document.querySelector("audio[src='siskobadending.mp3']");
var shipdestroe1= document.querySelector("audio[src='shipdestroe1.mp3']");
var siskoinjured= document.querySelector("audio[src='siskoinjured.mp3']");
var siskofire= document.querySelector("audio[src='siskofire.mp3']");
var fosterthank= document.querySelector("audio[src='fosterthank.mp3']");
var fosterno= document.querySelector("audio[src='fosterno.mp3']");
var backds9= document.querySelector("audio[src='siskobackds9.mp3']");
var repairdamage= document.querySelector("audio[src='siskorrepairdamage.mp3']");
var latinun= docoment.querySelector("audio[src='quarklatinun.mp3']");
var ob= document.querySelector("audio[src='quarkobtainmomey.mp3']");
var sb= document.querySelector("audio[src='quarksecretbusiness.mp3']");
var st= document.querySelector("audio[src='quarkshutup.mp3']");
var r31i= document.querySelector("audio[src='ron31interrupt.mp3']");
var rdw= document.querySelector("audio[src='rondowhatyouwant.mp3']");
var rm= document.querySelector("audio[src='ronmug.mp3']");
var rmm= document.querySelector("audio[src='ronmugmoney.mp3']");
var sws= document.querySelector("audio[src='siskowhoisit.mp3']");
var sl31= document.querySelector("audio[src='siskosloan1.mp3']");
var sm31= document.querySelector("audio[src='siskomoreinfo31.mp3']");
var sc31= document.querySelector("audio[src='siskoconvinced31.mp3']");
var st31= document.querySelector("audio[src='siskotakeus31.mp3']");
var swp= document.querySelector("audio[src='siskowellprepaired.mp3']");
var swin= document.querySelector("audio[src='siskowin31.mp3']");
var sl1= document.querySelector("audio[src='sloan1.mp3']");
var sl2= document.querySelector("audio[src='sloan2.mp3']");
var sl3= document.querySelector("audio[src='sloan3.mp3']");
var sl4= document.querySelector("audio[src='sloan4.mp3']");
var sl5= document.querySelector("audio[src='sloan5.mp3']");
var sl6= document.querySelector("audio[src='sloan6.mp3']");
var sl7= document.querySelector("audio[src='sloan7.mp3']");
document.addEventListener("keypress",function(e){
if(e.key=="Enter"){
sisko_diario.play();
}
if(e.key=="p"){
var phaser= document.getElementById("phaser");
phaser.play();
}
if(e.key=="t"){
var photon= document.getElementById("photon");
photon.play();
}
if(e.key=="a" && options.a){
options.a.call();
options.a=null;
options.b=null;
combat.call();
combat=null;
}
if(e.key=="b" && options.b){
options.b.call();
options.a=null;
options.b=null;
}
if(e.key=="q"){
var quantum= document.getElementById("quantum");
quantum.play();
}})
sisko_diario.addEventListener("ended",function(e){
odo1.play();
})
odo1.addEventListener("ended",function(e){
na_tela.play();
})
na_tela.addEventListener("ended",function(e){
foster1.play();
})
foster1.addEventListener("ended",function(e){
obrien.play();
});
siskooptb.addEventListener("ended",function(e){
bridge.pause();
ops.play();
odofleetreport.play();
});
odofleetreport.addEventListener("ended",function(e){
badending.play();
});
badending.addEventListener("ended",function(e){
ops.pause();
alert("game over!");
});
obrien.addEventListener("ended",function(e){
options.a=function (){
sisko_coordenadas.play();
}
options.b=function (){
siskooptb.play();
}});
sisko_coordenadas.addEventListener("ended",function(e){
odocon.play();
});
odocon.addEventListener("ended",function(e){
odoklingons.play();
});
odoklingons.addEventListener("ended",function(e){
red_alert.play();
});
red_alert.addEventListener("ended",function(e){
siskofire.play();
});
siskofire.addEventListener("ended",function(e){
shipdestroe1.play();
});
shipdestroe1.addEventListener("ended",function(e){
fosterthank.play();
});
fosterthank.addEventListener("ended",function(e){
siskoinjured.play();
});
siskoinjured.addEventListener("ended",function(e){
fosterno.play();
});
fosterno.addEventListener("ended",function(e){
backds9.play();
});
backds9.addEventListener("ended",function(e){
bridge.pause();
ops.play();
repairdamage.play();
});
repairdamage.addEventListener("ended",function(e){
    ops.pause();
latinun.play();
});
latinun.addEventListener("ended",function(e){
rm.play();
});
rm.addEventListener("ended",function(e){
sb.play();
});
sb.addEventListener("ended",function(e){
rmm.play();
});
rmm.addEventListener("ended",function(e){
ob.play();
});
ob.addEventListener("ended",function(e){
r31i.play();
});
r31i.addEventListener("ended",function(e){
st.play();
});
st.addEventListener("ended",function(e){
rdw.play();
});
rdw.addEventListener("ended",function(e){
ops.play();
sws.play();
});
sws.addEventListener("ended",function(e){
sl1.play();
});
sl1.addEventListener("ended",function(e){
sl31.play();
});
sl31.addEventListener("ended",function(e){
sl2.play();
});
sl2.addEventListener("ended",function(e){
sm31.play();
});
sm31.addEventListener("ended",function(e){
sl4.play();
});
swp.addEventListener("ended",function(e){
sl3.play();
});
sl3.addEventListener("ended",function(e){
swin31.play();
});
swin31.addEventListener("ended",function(e){
sl5.play();
});
sl5.addEventListener("ended",function(e){
sc31.play();
});
sc31.addEventListener("ended",function(e){
sl6.play();
});
sl6.addEventListener("ended",function(e){
st31.play();
});
st31.addEventListener("ended",function(e){
sl7.play();
});
sl7.addEventListener("ended",function(e){
ops.pause();
alert("fim! será continuado... to be continued!");
});