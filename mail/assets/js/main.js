const utenti = [
  'luciarossi@boolmail.com',
  'lucarossi@boolmail.com',
  'lucianorossi@boolmail.com',
  'gianniperignocco@boolmail.com',
  'adminadmin@boolmail.com',
  'giorgioverdi@boolmail.com',
  'michelepago@boolmail.com',
  'rosaculetto@boolmail.com',
  'domenicamelalavo@boolmail.com',
  'hahaha@boolmail.com',
  'hofinitoleidee@boolmail.com',
  'eoracosascrivo@boolmail.com',
]

const buttonLogin = document.getElementById('login');
const inputMail = document.getElementById('email');

buttonLogin.addEventListener('click', function(){
  let accessoNegato = true;
  let mail = inputMail.value;
  for (let i = 0; i < utenti.length; i++) {
    const utenteConAccesso = utenti[i];
    if(mail === utenteConAccesso){      
      accessoNegato = false;
    }    
  }; 
  if(accessoNegato){
    alert ('Errore nel Login')
  }else{
    alert ('Bentornato')
  }
  
})  
