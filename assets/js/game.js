// Variables to hold  the player data 
var playerName = window.prompt("What is your player's name?");
var playerHealth=100;
var playerAttack= 10;

console.log(playerName,playerHealth,playerAttack);

//Initializing the enemy robot data 
var enemyName="Roborto"
var enemyHealth=50;
var enemyattack= 12;


// this creates a function named "fight"
function fight(){
window.alert("Welcome to Robot Gladiators!");
enemyHealth=enemyHealth-playerAttack;
console.log (playerName+" attacked "+ enemyName +" . " + enemyName +" now has "+enemyHealth + " points. ");
if (enemyHealth <=0){
    console.log(enemyName + "has died.");
}
else{
    window.alert(enemyName+ " still has "+ enemyHealth+ " health points left.");
}
//enemy attacked player 
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
//execute the function
fight();




