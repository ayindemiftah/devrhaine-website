      
    
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
        
      let isAutoplaying = false;
      let intervalId ;

      //const autoPlay = () =>{

      //}

       document.querySelector('.js-autoPlay-button')
       .addEventListener('click', ()=>{
        autoPlay();
       })


       document.querySelector('.js-reset-score-button')
       .addEventListener('click',()=>{
        score.wins =0;
        score.lose = 0;
        score.ties = 0;

        localStorage.removeItem('score');
        updateScoreElement();
       })


       
       document.body.addEventListener('keydown', (event)=>{
          if(event.key === 'a'){
            autoPlay();
          }
       })

                
       document.body.addEventListener('keydown', (event)=>{
        if(event.key === 'Backspace'){
        score.wins =0;
        score.lose = 0;
        score.ties = 0;

        localStorage.removeItem('score');
        updateScoreElement();
        }
       })


        function autoPlay (){
          if (!isAutoplaying){
          intervalId = setInterval( () =>{
            const playerMove = pickComputermove();
          playGame(playerMove);
          }, 1000);
          isAutoplaying = true;

          document.querySelector('.js-autoPlay-button').innerHTML = 'Stop Playing'
        }else {
        clearInterval(intervalId);
        isAutoplaying = false;

         document.querySelector('.js-autoPlay-button').innerHTML = 'Auto Play'
          }
        }


        document.querySelector('.js-rock-button')
        .addEventListener('click', ()=>{
          playGame('rock');
        })


        document.querySelector('.js-paper-button')
        .addEventListener('click', ()=>{
          playGame('paper');
        })


        document.querySelector('.js-scissors-button')
        .addEventListener('click', ()=>{
          playGame('scissors');
        })


      document.body.addEventListener('keydown', (event)=>{
        if(event.key === 'r'){
        playGame ('rock');
        }else if (event.key === 'p'){
          playGame ('paper');
        }else if (event.key === 's'){
        playGame('scissors');
        }
      })

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
              result = ('tie');
            } else if (computerMove === 'paper'){
              result = ('you lose');
            } else if (computerMove === 'scissors'){
              result = ('you win');  
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


          document.querySelector('.js-result')
          .innerHTML = `${result}`;
        
          document.querySelector('.js-move').innerHTML = ` you
        <img class="move-icon" src="java script.course/images/${playerMove}-emoji.png">
        <img class="move-icon" src="java script.course/images/${computerMove}-emoji.png">
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

    