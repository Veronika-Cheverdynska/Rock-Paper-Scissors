const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
   player: 0,
   computer: 0
}

//Play game
function play(e) {
   restart.style.display = 'inline-block';
   const playerChoice = e.target.id;
   const computerChoice = getComputerChoice();
   const winner = getWinner(playerChoice, computerChoice);
   showWinner(winner, computerChoice);
}

//Get computers choce
function getComputerChoice() {
   const random = Math.random();
   if(random < 0.34) {
      return 'rock';
   }else if(random <= 0.67) {
      return 'paper';
   }else{
      return 'scissors';
   }
}

//Get winner
function getWinner(p, c) {
   if(p === c) {
      return 'draw';
   }else if(p === 'rock') {
      if(c === 'paper') {
         return 'computer';
      }else{
         return 'player';
      }
   }else if(p === 'paper') {
      if(c === 'scissors') {
         return 'computer';
      }else{
         return 'player';
      }
   }else{
      if(c === 'rock') {
         return 'computer';
      }else{
         return 'player';
      }
   }
}

//Function show winner
function showWinner(winner, computerChoice) {
   if(winner === 'player') {
      // Increment players score
      scoreboard.player++;
      //Show modal result
      result.innerHTML = `
         <h1 class="text-win">You Win</h1>
         <i class="far fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
   }else if(winner === 'computer') {
      // Increment computer score
      scoreboard.computer++;
      //Show modal result
      result.innerHTML = `
         <h1 class="text-lose">You Lose</h1>
         <i class="far fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
   }else{
      //Show modal result
      result.innerHTML = `
         <h1>It's A Draw</h1>
         <i class="far fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
   }
   //Show score
   score.innerHTML = `<p>Player: ${scoreboard.player}</p>
   <p>Computer: ${scoreboard.computer}</p>`;

   modal.style.display = 'block';
}

//Restart Game
function restartGame() {
   scoreboard.player = 0;
   scoreboard.computer = 0;
   score.innerHTML = `<p>Player: ${scoreboard.player}</p>
   <p>Computer: ${scoreboard.computer}</p>`;
   restart.style.display = 'none';
}

//Clear modal
function clearModal(e) {
   if(e.target == modal) {
      modal.style.display = 'none';
   }
}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);