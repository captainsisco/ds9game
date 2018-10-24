var falas=[
new SpeechSynthesisUtterance("Captão Sisko: diário do Captão data estelar 4 1 2 7 2 .4. Estamos abordo da USS defiant voltando para Deep Space Nine depois de uma missão bem sucedida no quadrante gama, acabar com um recente ataque do Dominion."),
new SpeechSynthesisUtterance("Odo: Captão, Estamos recebendo uma chamada de socorro de uma nave desconhecida, coordenadas 5 4 3 4 2 marco 4."),
new SpeechSynthesisUtterance("Captão Sisko: na tela!"),
new SpeechSynthesisUtterance("Captão foster: atenção, atenção qualquer nave! Estamos sendo atacados por uma nave Klingon! ajudem!"),
new SpeechSynthesisUtterance("Chefe O'Brien: temos duas opções, Captão: ajudá-los ou retornar a Deep Space Nine.")
];
var speech= speechSynthesis;
setTimeout(function(){
speech.speak(falas[0]);
},1000);
setTimeout(function(){
speech.speak(falas[1]);
},13000);
setTimeout(function(){
speech.speak(falas[2]);
},13000);
setTimeout(function(){
speech.speak(falas[3]);
},17000);
setTimeout(function(){
speech.speak(falas[4]);
},17000);
document.addEventListener("keypress",function(e){
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