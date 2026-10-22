     
  
      let score =JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        lose: 0,
        ties: 0
      };
    
      updateScoreElement();
      
      /*
      if (score === null){
      score = {
        wins: 0,
        lose: 0,
        ties: 0
      }; 
      }
      */

      function playGame(playerMove) {
        const computerMove= pickComputermove();
        let result = '';
          

        if (playerMove === 'scissors'){
          if (computerMove === 'rock'){
          result = ('you lose');
        } else if (computerMove === 'paper'){
          result = ('you win');
        } else if (computerMove === 'scissors'){
          result = ('tie');
        }


        }else if (playerMove === 'paper'){

      
          if (computerMove === 'rock'){
            result = ('you win');
          } else if (computerMove === 'paper'){
            result = ('tie');
          } else if (computerMove === 'scissors'){
            result = ('you lose');
          }

          } else if (playerMove === 'rock'){
            
          
          if (computerMove === 'rock'){
            result = ('Tie.');
          } else if (computerMove === 'paper'){
            result = ('You lose.');
          } else if (computerMove === 'scissors'){
            result = ('You win.');  
          }
        }
        
        if (result === 'you win'){
          score.wins +=1;
        }else if (result === 'you lose'){   
          score.lose +=1;
        } else if (result === 'tie'){
          score.ties +=1;
        }

        localStorage.setItem('score', JSON.stringify(score));

       updateScoreElement();


        document.querySelector('.js-Result')
        .innerHTML = `${result}`;
       
        document.querySelector('.js-move').innerHTML = ` you
      <img class="move-icon" src="images/${playerMove}-emoji.png">
      <img class="move-icon" src="images/${computerMove}-emoji.png">
      computer`;
        }
      
       function updateScoreElement(){
       document.querySelector('.js-score')
        .innerHTML =`wins: ${score.wins}, lose: ${score.lose}, tie: ${score.ties}`
       }
      
     

    
        function pickComputermove() {
        const randomNumber = Math.random();    
          let computerMove ='';
      
        if (randomNumber > 0 && randomNumber < 1/3){
          computerMove = ('rock');
        } else if (randomNumber > 1/3 && randomNumber < 2/3){
            computerMove = ('paper');
        } else if (randomNumber >2/3 && randomNumber < 1){
          computerMove = ('scissors');
        }
        return computerMove ;
    }

  