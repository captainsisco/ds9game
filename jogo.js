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
})
obrien.addEventListener("ended",function(e){
sisko_coordenadas.play();
})
sisko_coordenadas.addEventListener("ended",function(e){
odocon.play();
})	