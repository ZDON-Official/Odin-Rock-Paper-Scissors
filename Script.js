function getComputerChoice(){
    var rand = Math.floor(Math.random()*2)

    if(rand === 0){
        return "rock"
    } else if(rand === 1){
        return "paper"
    }
    
    return "scissors"
}