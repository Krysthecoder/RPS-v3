//global variables 
const userPicture = document.getElementById('userPicture');
const cpuPicture = document.getElementById("cpuPicture"); 
const userDisplay = document.getElementById('userDisplay');
const cpuDisplay = document.getElementById('cpuDisplay');
const resultDisplay = document.getElementById('resultDisplay');

//array with the items that will be used
const itemsArr = ["paper", "rock", "scissors"];

//counters
let userPoints = 0;
let cpuPoints = 0;

//music variables
let bgMusic = false;
let bgSound = new Audio("./src/bgAudioStarWars.mp3");

// randomizer
function cpuChoice(){
    const randomizer = Math.floor(Math.random()*3);
    cpuPicture.classList.replace("cpuDefaultPicture", itemsArr[randomizer]);
    setTimeout( () => {
        cpuPicture.classList.replace(itemsArr[randomizer], "cpuDefaultPicture");
    }, 1500);
    return itemsArr[randomizer];
}

// //we then convert the string into number
// userPoints.innerHTML = parseInt(userPoints);
// cpuPoints.innerHTML = parseInt(cpuPoints);

function counter(winner){
    if(winner === true){
        userPoints += 1;
        userDisplay.innerText = userPoints;
    }else{
        cpuPoints +=1
        cpuDisplay.innerText = cpuPoints;
    }
}


//decision maker function 
function decision(user, cpu){
//console.log(cpu + " vs " + user)
    if(user === cpu){
        resultDisplay.innerText = "its a draw";
    }else if(
        user === 'rock' && cpu === 'scissors' ||
        user === 'scissors' && cpu === 'paper' ||
        user ===  'paper' && cpu === 'rock'
    ){
        counter(true);
        console.log("won")
        resultDisplay.innerText = "You won this time!"
    }else{
       resultDisplay.innerText = "You have lost!";
       counter(false);
    }
}


//reset function
function resetPicture(classElem){
    setTimeout( () => {
        userPicture.classList.replace(classElem, "userDefaultPicture");
    }, 1500);
}


//selection section
function selection(elem){
    if(elem === "rock"){
        userPicture.classList.replace("userDefaultPicture", elem);
        let enemy = cpuChoice();
        decision(elem, enemy)
        resetPicture(elem);
    }
    if(elem === "paper"){
        userPicture.classList.replace("userDefaultPicture", "paper");
        let enemy = cpuChoice();
        decision(elem, enemy)
        resetPicture(elem);
    }
    if(elem === "scissors"){
        userPicture.classList.replace("userDefaultPicture", "scissors");
        let enemy = cpuChoice();
        decision(elem, enemy)
        resetPicture(elem);
    }
}






function music(elem){
    if(bgMusic === false){
      document.getElementById('bgMusicText').innerHTML = `Music Off <i class="bi bi-volume-mute-fill"></i>`;
      bgMusic = true;
      bgSound.play()
    }else{
        document.getElementById('bgMusicText').innerHTML = `Music On <i class="bi bi-volume-up"></i>`;
      bgMusic = false;
      bgSound.pause();
      bgSound.currentTime = 0;
    }
    //console.log(cpuChoice())
}

