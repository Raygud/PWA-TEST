const Wheel = document.getElementById("Wheel")
const Question = document.getElementById("Question")
const Dead1 = document.getElementById("Dead1")
const Dead2 = document.getElementById("Dead2")
const Dead3 = document.getElementById("Dead3")
const Username = document.getElementById("UserName")
const SecretPopUp = document.getElementById("Secret")
const AddPlayerMenu = document.getElementById("AddPlayerMenu")
const Arrow = document.getElementById("Arrow")
const UserNameAdd = document.getElementById("UserNameAdd")
let SecretState = true
let MenuState = false
let UserTurn = 0

let Users = [
]
let i = 1 // NR OF LIVES
// 1-89 = Dare
// 91-143 = Secret
// 145-269 = Rather
// 271 - 359 = Truth

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function AddPlayer(){
    Users.push({Name: UserNameAdd.value ,
        Lives: 3,
        Mission: null})
}



function WheelSpin(UserTurn){
    console.log(Users[UserTurn].Name)
Username.textContent = Users[UserTurn].Name
Question.textContent = "..."
rand = generateRandomIntegerInRange(0, 360);
Wheel.style.transform = `scale(1.25) rotate(${rand+3600}deg)`
ArrowAnimation()
setTimeout(() => {Wheel.style.transition = "0s";Wheel.style.transform = `scale(1.25) rotate(${rand}deg)`}, 5000);
setTimeout(() => {Wheel.style.transition = "5s";}, 5100);
setTimeout(() => {
const x = rand;
switch (true) {
    case (x < 89):
        Choice("Dare")
        document.body.style.backgroundColor = "rgb(150, 0, 0)"
        break;
        case (x < 143):
        alert("Secret!")
        document.body.style.backgroundColor = "rgb(19, 19, 19)"
        SecretPopUp.style.transform = `scale(1) rotate(360deg)`

        break;
    case (x < 269):
        Choice("Rather")
        document.body.style.backgroundColor = "Pink"
        break;
    case (x < 359):
        Choice("Truth")
        document.body.style.backgroundColor = "Orange"
        break;
    default:
        alert("none");
        break;
}}, 2000);
 }

function Choice(TDR){
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
fetch(`/${TDR}.json`)
.then((response) => {
  return response.json()
})
.then((data) => {
  // Work with JSON data here
    Nr = generateRandomIntegerInRange(0, (data.length-1));
    setTimeout(() => {Question.textContent = data[Nr]}, 2900);
})
.catch((err) => {
  // Do something for an error here
})
  
}

function Chicken(){
    
    if(i > 3){
        i = 0
        for(let q = 1;q < 4;q++){
            document.getElementById(`Dead${q}`).style.display = "block"
        }
    }
    else{
        ChickeSound()
        document.getElementById(`Dead${i}`).style.display = "none"
        WheelSpin()
    }
    i++
}


function ChickeSound() {
    var audio = new Audio('/ChickenSound.mp3');
    audio.play();
  }

  function SecretAnimation(){
    SecretPopUp.style.transform = `scale(1.25) rotate(360deg)`

    if (SecretState = !SecretState){
        SecretPopUp.style.transform = `scale(0) rotate(-360deg)`
        SecretPopUp.style.left = "-25vw"
        SecretPopUp.style.top = "3vw"
        setTimeout(() => {SecretPopUp.style.left = "10vw"
        SecretPopUp.style.top = "55vw"
        }, 510);
        
    }
    else{
        SecretPopUp.style.transition = "0s"
        SecretPopUp.style.transition = "500ms"
        SecretPopUp.style.transform = `scale(1.25) rotate(360deg)`
    }
  }

  function ArrowAnimation(){
    setTimeout(() => {Arrow.style.transform = "rotate(-30deg)"}, 100);
    setTimeout(() => {Arrow.style.transform = "rotate(0deg)"}, 4500);

  }

  function OpenAddPlayer(){

    
    if (SecretState = !SecretState){
        AddPlayerMenu.style.height = "60vh"
        
    }
    else{
        AddPlayerMenu.style.height = "0vh"
    }
    
  }

