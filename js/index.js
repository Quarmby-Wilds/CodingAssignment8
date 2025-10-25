let again = true

const answers = ["bear", "ninja", "hunter"];

while (again === true) {

    // Welcome prompt

    let name = prompt("Welcome to Bear, Ninja, Hunter. Please enter your name.");

    if (name === null) {
        break;
    }

    alert("Hi, " + name + ". Let's get started.");

    // Start game

    let choice = prompt("Please enter Bear, Ninja, or Hunter.").toLocaleLowerCase();

    if (choice === null) {
        break;
    }

    while (!answers.includes(choice)) {
        choice = prompt("Uh oh! That wasn't one of the choices. Please choose Bear, Ninja, or Hunter.");
        if (choice === null) {
            break;
        }
        choice = choice.toLocaleLowerCase();
    }

    if (choice === null) {
        break;
    }
    
    // Generate computer answer

    let compChoice
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        compChoice = "Bear";
    } else if (randomNumber === 2) {
        compChoice = "Ninja";
    } else {
        compChoice = "Hunter";
    }

    // Calculate who wins

    let results;

    switch(compChoice) {
        case "Bear":
            if (choice === "ninja") {
                results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins.";
            }
            if (choice === "hunter") {
                results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!";
            }
            break;
        case "Ninja":
            if (choice === "hunter") {
                results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins.";
            }
            if (choice === "bear") {
                results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!";
            }
            break;
        case "Hunter":
            if (choice === "bear") {
                results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins.";
            }
            if (choice === "ninja") {
                results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!";
            }
            break;
    }

    if (compChoice.toLowerCase() === choice) {
        results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nIt was a tie.";
    }

    // Display winner

    alert(results);
    console.log(results);

    // Again?

    let again_choice = prompt("Would you like to play again (y/n)").toLocaleLowerCase();

    if (again_choice === "y") {
        again = true;
    } else {
        again = false;
    }

}
