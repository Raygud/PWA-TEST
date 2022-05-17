# Consequence
A truth and dare like PWA game with a twist.

The players are faced with a wheel of fortune(or misfortune), this wheel contains the consequences Dare,Truth,Rather and Secret.

## What do the consequences mean?

1. Dare: The dare consequence means that the player must complete the dare he is provided with or use Chicken([Read more..](#Chicken))
2. Truth: The truth consequence means that the player must answer the following question truthfully or use Chicken([Read more..](#Chicken))
3. Rather: The rather consequence means that the player must answer the following dilemma or use Chicken([Read more..](#Chicken))
4. Secret: The secret consequence means that the player will receive a secret mission the player CANNOT use chicken on this consequence.



## Chicken<a name="Chicken"></a> 
Each player starts with 3 Chickens/Lives these chickens can be used at the cost of one sip of your drink.

## Random Number

```
function generateRandomIntegerInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
```

Generates a random number between x-y would be used as shown below 

```
rand = generateRandomIntegerInRange(0, 10);
```
this will generate a "random" number between 0 and 10(Including both)

## Users 

```
function User(){
    if(Users.length >0){
      if(UserTurn > Users.length-1){
            UserTurn = 0
            WheelSpin(UserTurn)
      }
            else{
                  WheelSpin(UserTurn)
                  UserTurn++
                }
     }
    else{
         alert("NO PLAYERS!")
        }
    }
```
First checks if ther are any users in the Users Array, if not then it runs the last else statement prompting the player to add a user,
if the first statement is TRUE and and the second if statement is FALSE run the "Wheelspin()" function and move on to the next user(UserTurn++)
if the first statement is TRUE and the second statement(Are we on the last index of the Users array?) is TRUE, reset UserTurn to 0(UserTurn = 0) and then run the "Wheelspin()" function, we are now back to the first player in Users Array.

