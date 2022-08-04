function getComputerChoice(){
    var rand = Math.floor(Math.random()*3)

    //console.log("rand " + rand)

    if(rand === 0){
        return "rock"
    } else if(rand === 1){
        return "paper"
    }

    return "scissors"
}

function PlayRound(getComputerChoice, playerSelection){
    Ps = playerSelection.toLowerCase()
    Cp = getComputerChoice

    if(Ps === Cp){
        return "It's a draw!"
    }

    if(Cp === "paper" && Ps === "rock"){
        
        return "You Lose! Paper beats Rock"
    } else if(Cp === "paper" && Ps === "rock"){

        return "You Lose! Paper beats Rock"
    } else if(Cp === "paper" && Ps === "rock"){

        return "You Lose! Paper beats Rock"
    }

    return "You Win! " + Ps + " beats " + Cp
}


// for(let i=0; i<20;i++){
//     console.log(getComputerChoice())
// }

var ans = PlayRound(getComputerChoice(), "Rock")

