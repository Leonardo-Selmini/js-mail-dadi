// creo una variabile che selezioni il mio bottone
const gioca = document.getElementById('gioca');

// genero due variabili per i dadi
let dadoUser;
let dadoIA;

// eseguo una funzione al click del mio bottone
gioca.addEventListener('click', function() {
  
  // resetto le classi colore output (vedi giù)
  document.getElementById('output').classList.remove('win')
  document.getElementById('output').classList.remove('tie')
  document.getElementById('output').classList.remove('lose')

  // faccio tirare il dado user e printo icona in base al risultato
  dadoUser = Math.floor((Math.random() * 6) + 1);
  if (dadoUser == 1) {
  document.getElementById('dado-user').innerHTML = '<i class="fas fa-dice-one"></i>';
  } else if ( dadoUser == 2) {
      document.getElementById('dado-user').innerHTML = '<i class="fas fa-dice-two"></i>';
  } else if ( dadoUser == 3) {
      document.getElementById('dado-user').innerHTML = '<i class="fas fa-dice-three"></i>';
  } else if ( dadoUser == 4) {
      document.getElementById('dado-user').innerHTML = '<i class="fas fa-dice-four"></i>';
  } else if ( dadoUser == 5) {
      document.getElementById('dado-user').innerHTML = '<i class="fas fa-dice-five"></i>';
  } else {
      document.getElementById('dado-user').innerHTML = '<i class="fas fa-dice-six"></i>';
  }

  // faccio tirare il dado ia e printo icona in base al risultato
  dadoIA = Math.floor((Math.random() * 6) + 1);
  if (dadoIA == 1) {
    document.getElementById('dado-ia').innerHTML = '<i class="fas fa-dice-one"></i>';
    } else if ( dadoIA == 2) {
        document.getElementById('dado-ia').innerHTML = '<i class="fas fa-dice-two"></i>';
    } else if ( dadoIA == 3) {
        document.getElementById('dado-ia').innerHTML = '<i class="fas fa-dice-three"></i>';
    } else if ( dadoIA == 4) {
        document.getElementById('dado-ia').innerHTML = '<i class="fas fa-dice-four"></i>';
    } else if ( dadoIA == 5) {
        document.getElementById('dado-ia').innerHTML = '<i class="fas fa-dice-five"></i>';
    } else {
        document.getElementById('dado-ia').innerHTML = '<i class="fas fa-dice-six"></i>';
    }

  // // controllo che la console tiri i due dadi
  // console.log(dadoUser, dadoIA)

  // if per controllare il valore piu alto e stampare il vincitore
  if (dadoUser > dadoIA) {
    document.getElementById('output').innerHTML = 'YOU WON!'
    document.getElementById('output').classList.add('win')
  } else if (dadoUser == dadoIA) {
    document.getElementById('output').innerHTML = 'TIE!'
    document.getElementById('output').classList.add('tie')
  } else if (dadoUser < dadoIA) {
    document.getElementById('output').innerHTML = 'YOU LOSE!'
    document.getElementById('output').classList.add('lose')
  }
})