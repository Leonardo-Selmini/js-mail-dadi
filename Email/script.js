//variabile con array
const email = ['selminileonardo@gmail.com', 'leonardoselmini@hotmail.it', 'selminileonardo@icloud.com', 'leonardoselmini@libero.it'];

// prompt per input user
let userEmail = prompt('Inserisci la tua email:');

// ciclo if per controllare che userEmail sia uno dei valori del mio array con variabile sentinella
let sentinella = false;

for (let i = 0; i <= email.length; i++) {
  if (userEmail == email[i]) {
    sentinella = true;
  }
}

// controllo che il mio ciclo funzioni
console.log(sentinella);

// if che controlla il valore di sentinella e stampa
if (sentinella == true) {
  document.getElementById('output').innerHTML = 'La mail da lei indicata è presente nella nostra lista. Benvenuto nel portale leoSiDiverteConJavaScript!';
} else {
  document.getElementById('output').innerHTML = 'La mail da lei indicata non è presente nella nostra lista. Contatti l\'ufficio leoSiDiverte per ulteriori informazioni.';
}