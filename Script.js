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
    } else if(Cp === "rock" && Ps === "scissor"){

        return "You Lose! Rock beats Scissor"
    } else if(Cp === "scissor" && Ps === "paper"){

        return "You Lose! Scissors beats Paper"
    }

    return "You Win! " + Ps + " beats " + Cp
}

function Game(){
    var Pscore = 0
    var Cscore = 0

    for(let i=0;i<5;i++){
        const playerSelection = prompt("Chose Rock, Paper, or Scissor!")
        const ComputerSelection = getComputerChoice()
        var ret = PlayRound(ComputerSelection, playerSelection)

        if(ret.includes("Win")){
            Pscore++
        } else{
            Cscore++
        }

        console.log(ret)
    }

    if(Pscore > Cscore){
        return "You Win!!"
    } else if(Pscore < Cscore){
        return "You Lost!"
    } 

    return "It's a Draw"
}

var res = Game()
console.log(res)
document.getElementById("ret").innerHTML = res

