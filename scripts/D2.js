/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 10
const num2 = 12

if (num1 > num2){
  console.Log(num2 + " è il numero più grande")
} else{
  console.log(num1 + " è il numero più grande")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//RIUTILIZZO LA VARIABILE CONST NUM1 DICHIARATA SOPRA

if (num1 !== 5){
  console.log("not equal")
} else{
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//RIUTILIZZO LA VARIABILE CONST NUM1 DICHIARATA SOPRA
const divResult = num1 % 5

if (divResult === 0){
  console.log("Divisibile per 5")
} else {
  console.log("Non divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const vNum1 = 19
const vNum2 = 4

if (vNum1 === 8 || vNum2 === 8){
  console.log("Uguale a 8")
} else if(vNum1 - vNum2 === 8 || vNum2 - vNum1 === 8){
  console.log("Uguale a 8")
}else if (vNum1 + vNum2 === 8){
  console.log("Uguale a 8")
} else
  console.log("Nessun numero uguale a 8")


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 45
let shippingCost

if (totalShoppingCart > 50) {
  console.log("La spedizione è gratuita")
  shippingCost = totalShoppingCart
} else {
  shippingCost = totalShoppingCart + 10
}

console.log("Totale da pagare: " + shippingCost)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//NON DICHIARO LE VARIABILI LE RI UTILIZZO
const discountedCart = totalShoppingCart * 0.8

if (discountedCart > 50) {
  console.log("La spedizione è gratuita")
  shippingCost = discountedCart
} else {
  shippingCost = discountedCart + 10
}

console.log("Totale da pagare: " + shippingCost)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const vUno = 45
const vDue = 28
const vTre = 18

if (vUno > vDue && vUno > vTre){
  console.log(vUno + " E il numero più grande")
}
if (vDue < vUno && vDue > vTre){
  console.log(vDue + " E il secondo numer piu grande")
}
if (vTre < vUno || vTre < vDue){
  console.log(vTre + " E il più piccolo")
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//NON DICHIARO LE VARIABILI LE RI UTILIZZO
if (typeof vUno === "number"){
  console.log("E un numero")
} else {
  console.log("Non è un numero")
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
