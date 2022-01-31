# robot-gladiators
## Description
A browser-based combat simulator video game  where players will coach their robot through a series of fights gaining cash, attack power, and repairs along the way. The robot that survives with the most cash will be remembered in the browser's storage system and will be declared as winner.

## Technologies 
# Javascript 
  * Communicate with the game player by using JavaScript functions.
  * manipulate data using JavaScript variables and operators.
  * Control the flow of the application by using conditional statements.
# CSS 
  
## Process 
At the start, 
  * The game will prompt the player to name their robot.
  * The player's robot will be initialized with the following properties:
      100 health points
      10 attack points
      10 money points
  * The player's opponent, Roborto, will be initialized with the following properties:
      50 health points
      12 attack points
  * The game will display "Welcome to Robot Gladiators!"
  * The game will prompt the player to either fight the round or skip it.
      If the player chooses to skip:
        A penalty of 10 money points will be deducted from the player's robot.
        The game will end.
     If the player chooses to fight:
        The player's robot will attack Roborto, and the player-robot's attack points will be deducted from Roborto's health points.
        The game will display Roborto's remaining health points.
        Roborto will attack the player's robot, and Roberto's attack points will be deducted from the player's robot's health points.
        The game will display the player-robot's remaining health points.
        The game will end.
