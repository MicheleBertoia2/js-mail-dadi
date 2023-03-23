const numComputer = document.getElementById('numComputer');
const numPlayer = document.getElementById('numPlayer');
const gioca = document.getElementById('gioca');

gioca.addEventListener('click', function(){
  const randomPlayer = Math.floor(Math.random() * 6 + 1);
  const randomComputer = Math.floor(Math.random() * 6 + 1);
  numPlayer.innerHTML = randomPlayer;
  numComputer.innerHTML = randomComputer;
  if(randomPlayer < randomComputer){
    alert('Hai perso!')
  }else if(randomPlayer > randomComputer){
    alert('Hai Vinto!')
  }else{
    alert('Hai pareggiato')
  }
})



