// Variables to hold  the player data 
var playerName = window.prompt("What is your player's name?");
var playerHealth=100;
var playerAttack= 10;
var playerMoney= 10;


// Array of enemy robots 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth=50;
var enemyattack= 12;
var enemyName ;

// this creates a function named fight with eneme name in parameter 
var fight =function (enemyName){
    
    while(enemyHealth> 0 && playerHealth >0)
    {
            // ask player if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If the player choses SKIP   
        if(promptFight == "skip" || promptFight=="SKIP")
            {
                // Confirm if player wants to skip
                var confirmSkip = window.confirm("Are you Sure?");
                //if true 
                if (confirmSkip){
                    // leave the fight and deduct the player money as penalty.
                    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                    playerMoney=playerMoney- 10;
                    console.log("playermoney" ,playerMoney);
                    break;
                }
            }
            if (promptFight=="FIGHT" || promptFight=="fight")
            {
                // remove enemy's health by subtracting the amount set in the playerAttack variable
                enemyHealth=enemyHealth-playerAttack;
                console.log (playerName+" attacked "+ enemyName +" . " + enemyName +" now has "+enemyHealth + " points. ");
                
                //check enemy's health
                if (enemyHealth <=0){
                    console.log(enemyName + "has died.");
                    // award player money for winning
                    playerMoney = playerMoney +20;
                    //leave the while loop since enemy is dead
                    break;
                }
                else{
                    window.alert(enemyName+ " still has "+ enemyHealth+ " health points left.");
                }

                // remove player health points
                playerHealth=playerHealth-enemyattack;
                //enemy attacked player 
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

                // check player's health
                if (playerHealth <= 0) {
                // message player has died 
                window.alert(playerName + " has died!");
                break;
                } 
                else {
                // display the remaining  health points 
                window.alert(playerName + " still has " + playerHealth + " health left.");
                }
            } 
        
        
    }
}
var  startGame = function()
{
    playerHealth=100;
    playerAttack= 10;
    playerMoney= 10;
    debugger;
    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0)
        {
            // let player know what round they are in.
            window.alert("Welcome to Robot Gladiators! Round: "+ (i+1));
            
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth
            enemyHealth = 50;
            //debugger;

            // pass the pickedEnemyName variable's value into the fight function.
            fight(pickedEnemyName);
        }
        else {
            
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        
    }
    endGame();

}


// function to end the entire game
var endGame = function() {
    if (playerHealth > 0)
    {       
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
            window.alert("You've lost your robot in battle.");
    }
    //window.alert("The game has now ended. Let's see how you did!");
<<<<<<< HEAD
    //window.alert(" YOu")
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
=======
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
>>>>>>> 1c6f749e7b8debd9aa7fc00b2f74d9476649417f

startGame();



