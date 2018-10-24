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
}
})