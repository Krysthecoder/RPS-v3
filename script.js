//global variables 
const userPicture = document.getElementById('userPicture');
const cpuPicture = document.getElementById("cpuPicture"); 

//array with the items that will be used
const itemsArr = ["paper", "rock", "scissors"];

//vars that have the values of the use and cpu section
let userPoints = document.getElementById('userPoints').innerHTML;
let cpuPoints = document.getElementById('cpuPoints').innerHTML;

// randomizer
function cpuChoice(){
    const randomizer = Math.floor(Math.random()*3);
    cpuPicture.classList.replace("cpuDefaultPicture", itemsArr[randomizer]);
    setTimeout( () => {
        cpuPicture.classList.replace(itemsArr[randomizer], "cpuDefaultPicture");
    }, 1500);
    return itemsArr[randomizer];
}

//we then convert the string into number
userPoints = parseInt(userPoints);
cpuPoints = parseInt(cpuPoints);


//decision maker function 
function decision(user, cpu){
//console.log(cpu + " vs " + user)
    if(user === cpu){
        console.log("its a draw")
    }else if(
        user === 'rock' && cpu === 'scissors' ||
        user === 'scissors' && cpu === 'paper' ||
        user ===  'paper' && cpu === 'rock'
    ){
        console.log('its a win')
    }else{
        console.log('its a loose')
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






function music(){
    console.log("I am still trying to figure this out.")
    //console.log(cpuChoice())
}

