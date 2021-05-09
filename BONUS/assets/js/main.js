//***************** BONUS  **********************/
//all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 => tra 1 e 80
//con difficoltà 2 => tra 1 e 50
var min = 1;
var max;
var difficoltà = Number(prompt('Inserisci la difficoltà: 1 facile - 2 medio - 3 difficile'))
if (difficoltà == 1) {
    max = 50;
} else if (difficoltà == 2) {
    max = 80;
} else if (difficoltà == 3) {
    max = 100;
} 

//Il computer deve generare 16 numeri casuali tra 1 e 100.

function genNumCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var numeriCasuali = [];

for (var i = 0; i < 16; i++){
    var numeroCasuale = genNumCasuali(min, max);
    //I numeri non possono essere duplicati.
    if (!numeriCasuali.includes(numeroCasuale)) {
        numeriCasuali.push(numeroCasuale)
    } else {
        i--
    }
}
console.log(numeriCasuali);
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeriUtenti = [];
for (var j = 0; j < 100 - numeriCasuali.length; j++) {
    var numeroUtente = Number(prompt('Inserisci un numero tra 1 e 100'));
    //L’utente non può inserire più volte lo stesso numero.
    if (numeriUtenti.includes(numeroUtente)) {
        alert('Attenzione, non inserire più volte lo stesso numero');
        j--
    } else {
        numeriUtenti.push(numeroUtente);
    }
    if (numeriCasuali.includes(numeroUtente)){
        //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        alert('Hai perso! hai inserito ' + numeriUtenti.length + ' numeri giusti');
        break;
    }
    if (numeriUtenti.length == 100 - numeriCasuali.length){
        //La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        alert('Complimenti, hai vinto!');
        break;
    }

}