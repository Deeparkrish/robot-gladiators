// Variables to hold  the player data 
var playerName = window.prompt("What is your player's name?");
var playerHealth=100;
var playerAttack= 10;
var playerMoney= 10;


// Array of enemy robots 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth=50;
var enemyAttack= 12;
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
                    playerMoney=Math.max(playerMoney- 10);
                    console.log("playermoney" ,playerMoney);
                    break;
                }
            }
            if (promptFight=="FIGHT" || promptFight=="fight")
            {   
                // generate random damage value based on player's attack power
                var damage = randomNumber(playerAttack - 3, playerAttack);
                // remove enemy's health by subtracting the amount set in the playerAttack variable
                enemyHealth= Math.max(0,enemyHealth-damage);
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
                // generate random damage value based on player's attack power
                var damage = randomNumber(enemyAttack - 3, enemyAttack);
                // remove player health points
                playerHealth=Math.max(playerHealth-damage,0);
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
    enemyHealth = randomNumber(40,60);

    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0)
        {
            // let player know what round they are in.
            window.alert("Welcome to Robot Gladiators! Round: "+ (i+1));
            
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth
            enemyHealth = randomNumber(40,60);
            //debugger;

            // pass the pickedEnemyName variable's value into the fight function.
            fight(pickedEnemyName);
            //
            // if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
              
                // if yes, take them to the store() function
                if (storeConfirm) {
                    if(playerMoney >= 7){
                        shop();
                    }
                    else {
                        window.alert("You don't have enough money!");   
                    }
                }
            }
  
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
var shop = function() {
    console.log("Entered the shop");
     // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
                            );
    // use switch to carry out action

switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":

      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      break;
    case "upgrade":
    case "UPGRADE" :
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      if(playerMoney<7) 
       {
        window.alert("You don't have enough money!");
       }
       else{
        shop();
       }
      break;
  }


  };
// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min+1) + min);
  
    return value;
  };  
startGame();



