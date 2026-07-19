let PlayerOneChoice = "Scissors"
let PlayerTwoChoice = "Scissors"
if ( PlayerOneChoice === "Rock" && PlayerTwoChoice === "Rock"){
    console.log("It's a Tie!");
}
else if ( PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper"){
    console.log("Player Two Win!");
}
else if ( PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors"){
    console.log("Player One Win!");
}
else if ( PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock"){
    console.log("Player One Win");
}
else if ( PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Rock"){
    console.log("Player Two Win!");
}
else if ( PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Scissors"){
    console.log("It's a Tie!");
}
else if ( PlayerOneChoice === "Paper" && PlayerTwoChoice === "Paper"){
    console.log("It's a Tie!");
}
else if ( PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors"){
    console.log("Player Two Win!");
}
else if ( PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper"){
    console.log("Player One Win!");
}
else {
    console.log("ERROR");
}