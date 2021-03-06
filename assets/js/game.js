/* FUNCTIONS DECLARATIONS */
// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min+1) + min);
    return value;
};  

var fightOrSkip = function(){
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "" || promptFight === null ) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    promptFight=promptFight.toLowerCase();
    if(promptFight === "skip" )
    {
                // Confirm if player wants to skip
                var confirmSkip = window.confirm("Are you Sure you want to skip?");
                //if true leave fight
                if (confirmSkip){
                    // leave the fight and deduct the player money as penalty.
                    window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                    //deduct the money
                    playerInfo.money=Math.max(0,playerInfo.money- 10);
                    console.log("playerInfo.money",playerInfo.money);
                    return true;    
                }
                return false;   
    }
    else if (promptFight!= "fight"){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    
};
// this creates a function named fight with enemy's  object in parameter 
var fight =function (enemy){
    console.log(enemy);
    var isPlayerTurn =true;

    // change order random 
    if (Math.random()>0.5)
    { isPlayerTurn= false;}
    while(enemy.health> 0 && playerInfo.health >0)
    {
        if (isPlayerTurn)
        {
            // ask player if they'd like to fight or skip
                if (fightOrSkip()){
                break;
                }
            
            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            // remove enemy's health by subtracting the amount set in the playerinfo.attack variable
            enemy.health= Math.max(0,enemy.health-damage);
            console.log (playerInfo.name+" attacked "+ enemy.name +" . " + enemy.name +" now has "+enemy.health + " points. ");
                    
            //check enemy's health
            if (enemy.health <=0){
                console.log(enemy.name + "has died!");
                        // award player money for winning
                        playerInfo.money = playerInfo.money +20;
                        //leave the while loop since enemy is dead
                        break;
            }
            else{
                    window.alert(enemy.name+ " still has "+ enemy.health+ " health points left.");
            }
        }
        else{        
           // generate random damage value based on player's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            // remove player health points
            playerInfo.health=Math.max(playerInfo.health-damage,0);
            //enemy attacked player 
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

                // check player's health
            if (playerInfo.health <= 0) {
            // message player has died 
                window.alert(playerInfo.name + " has died!");
                break;
                } 
                else {
                // display the remaining  health points 
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
        }   
        // next round change turns 
        isPlayerTurn= !isPlayerTurn; 
             
    }
};

//start a new game
var  startGame = function()
{
    //reset player status 
    playerInfo.reset();
    console.log(playerInfo);

    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        //If player is alive
        if (playerInfo.health > 0)
        {
            // let player know what round they are in.
            window.alert("Welcome to Robot Gladiators! Round: "+ (i+1));
            debugger;
            // pick new enemy to fight based on the index of the enemy array
            var pickedEnemyObj = enemyInfo[i];
            //set picked enemy's health
            pickedEnemyObj.health = randomNumber(40,60);
            // pass the pickedEnemyObj value into the fight function.
            fight(pickedEnemyObj);
            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                    //ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                    // if yes, take them to the store() function
                    if (storeConfirm) {shop(); }   
            }
        }
        //if player is not alive, break out of the loop   
        else {
                    window.alert("You have lost your robot in battle! Game Over!");
                    break;
            }         
        
    } //end of for loop

    //call endgame function
    endGame();

};

// function to end the entire game
var endGame = function() {
window.alert("The game has now ended. Let's see how you did!");
//check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  // if player has more money than the high score, player has new high score!
  if (playerInfo.money > highScore) 
  {
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  } 
  else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
  }

    /*If the player is alive
    if (playerInfo.health > 0)
    {       
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
            window.alert("You've lost your robot in battle.");
    }*/
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//Shopping for upgrade/refill
var shop = function() {
    console.log("Entered the shop");
     // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
    shopOptionPrompt = parseInt(shopOptionPrompt);

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case 1:
        
                    // increase health and decrease money
                    playerInfo.refillHealth();
                    break;
        
        case 2:
                    // increase attack and decrease money
                    playerInfo.upgradeAttack();
                    break;
       
        case 3:
                    window.alert("Leaving the store.");
                    // do nothing, so function will end
                    break;
        default:
                    window.alert("You did not pick a valid option. Try again.");
                    // call shop() again to force player to pick a valid option    
                    shop();
                    break;
    };

};

//function to get player name 
var getPlayerName =function(){
    var name ="";
    while(name ===""|| name === null)
    {
        name= window.prompt("What is your player's name?");

    }
    console.log("Your robot's name is " + name);
    return name;
    
};
/* END OF FUNCTIONS */

/* PLAYER AND ENEMY OBJECT DECLARATIONS*/
// Objects to hold  the player data 
var playerInfo = {
    name:getPlayerName(),
    health:100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      },
    refillHealth: function() {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        if (this.money >=7){
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");   
        }
    }, // comma!
    upgradeAttack: function() {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        if (this.money >=7){
            this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!");   
            }
    },

};

// Array of enemy robots 
var enemyInfo =[
    {
        name : "Roborto",
        health:50,
        attack:randomNumber(10,14)
    },
    {
        name:"Amy Android",
        health:50,
        attack:randomNumber(10,14)
    },
    {
        name:"Robo Trumble",
        health:50,
        attack:randomNumber(10,14)
    }
];
/* ENF OF PLAYER AND ENEMY OBJECT DECLARAIONS */

/* START THE GAME */
 startGame();