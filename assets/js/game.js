// Variables to hold  the player data 
var playerName = window.prompt("What is your player's name?");
var playerHealth=100;
var playerAttack= 10;
var playerMoney= 10;

console.log(playerName,playerHealth,playerAttack);

//Initializing the enemy robot data 

// Array of enemy robots 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth=50;
var enemyattack= 12;
var enemyName ;

// this creates a function named "fight"
var fight =function (enemyName){
    
    while(enemyHealth> 0 && playerHealth >0)
    {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If the player chose SKIP   
        if(promptFight == "skip" || promptFight=="SKIP")
            {
                // Confirm 
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
        // Ask player to type in a valid option.
        //else {
        // window.alert("You need to choose a valid option. Try again!"); 
    //
        //  }
    }
}
//execute the function
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0)
    {
        window.alert("Welcome to Robot Gladiators! Round: "+ (i+1));
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    debugger;
    fight(pickedEnemyName);
    //fight(enemyNames[i]);
  }

//fight();




