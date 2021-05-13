// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min+1) + min);
  
    return value;
  };  
// Objects to hold  the player data 
var playerInfo = {
    name: window.prompt("What is your player's name?"),
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
    }
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

// this creates a function named fight with eneme name in parameter 
var fight =function (enemy){
    console.log(enemy);
    while(enemy.health> 0 && playerInfo.health >0)
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
                    window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                    playerInfo.money=Math.max(playerInfo.money- 10);
                    console.log("playermoney" ,playerInfo.money);
                    break;
                }
            }
            if (promptFight=="FIGHT" || promptFight=="fight")
            {   
                // generate random damage value based on player's attack power
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                // remove enemy's health by subtracting the amount set in the playerinfo.attack variable
                enemy.health= Math.max(0,enemy.health-damage);
                console.log (playerInfo.name+" attacked "+ enemy.name +" . " + enemy.name +" now has "+enemy.health + " points. ");
                
                //check enemy's health
                if (enemy.health <=0){
                    console.log(enemy.name + "has died.");
                    // award player money for winning
                    playerInfo.money = playerInfo.money +20;
                    //leave the while loop since enemy is dead
                    break;
                }
                else{
                    window.alert(enemy.name+ " still has "+ enemy.health+ " health points left.");
                }
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
             
    }
}
var  startGame = function()
{
    //reset player status 
    playerInfo.reset();
    //pickedEnemyObj.health = randomNumber(40,60);
    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0)
        {
            // let player know what round they are in.
            window.alert("Welcome to Robot Gladiators! Round: "+ (i+1));
            // pick new enemy to fight based on the index of the enemy array
            var pickedEnemyObj = enemyInfo[i];
            //reset enemy'sHealth
            pickedEnemyObj.health = randomNumber(40,60);
            //debugger;
            // pass the pickedEnemyObj value into the fight function.
            fight(pickedEnemyObj);
            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                    //ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                    // if yes, take them to the store() function
                    if (storeConfirm) shop();      
            }
            else {
                    window.alert("You have lost your robot in battle! Game Over!");
                    break;
            }
            
        }
    }
    endGame();

}


// function to end the entire game
var endGame = function() {
    if (playerInfo.health > 0)
    {       
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
                    // increase health and decrease money
                    playerInfo.refillHealth();
                    break;
        case "upgrade":
        case "UPGRADE" :
                    // increase attack and decrease money
                    playerInfo.upgradeAttack();
                    break;
        case "leave":
        case "LEAVE":
                    window.alert("Leaving the store.");
                    // do nothing, so function will end
                    break;
        default:
                    window.alert("You did not pick a valid option. Try again.");
                    // call shop() again to force player to pick a valid option    
                    shop();
                    break;
    };

}

 startGame();