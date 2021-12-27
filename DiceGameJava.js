

    function BeatThat() {

    //Test Function
    //alert("hi");

    //Varibles for computer dice
    var ComDie1 = Math.floor(Math.random()*7);
    var ComDie2 = Math.floor(Math.random()*7);
    var ComSum = ComDie1 + ComDie2;

    //Varibles for user dice
    var UserDie1 = Math.floor(Math.random()*7);
    var UserDie2 = Math.floor(Math.random()*7);
    var UserSum = UserDie1 + UserDie2;

    //If a die equals zero. Make the varible a string
    if (ComDie1 == 0) {
        ComDie1 = "Oops! Lost the die! 0";
    }

    if (ComDie2 == 0) {
        ComDie2 = "Oops! Lost the die! 0";
    }

    if (UserDie1 == 0) {
        UserDie1 = "Oops! Lost the die! 0";
    }

    if (UserDie2 == 0) {
        UserDie2 = "Oops! Lost the die! 0";
    }

    //Display Computer Die
    document.getElementById("Computer").innerHTML= "Computer Results";
    document.getElementById("ComputerDie1").innerHTML= "First Die: " + ComDie1;
    document.getElementById("ComputerDie2").innerHTML= "Second Die: " + ComDie2;
    document.getElementById("ComputerTotal").innerHTML= "Dice Total: " + ComSum;

    //Display User Die
    document.getElementById("User").innerHTML= "Player Results";
    document.getElementById("UserDie1").innerHTML= "First Die: " + UserDie1;
    document.getElementById("UserDie2").innerHTML= "Second Die: " + UserDie2;
    document.getElementById("UserTotal").innerHTML= "Dice Total: " + UserSum;

    //If Computer is less than User, User Win
    if (ComSum < UserSum) {
        document.getElementById("Results").innerHTML= "You Win!";
    }

    //If Computer and User are equal, Tie
    else if (ComSum == UserSum) {
        document.getElementById("Results").innerHTML= "Tie! Roll Agian!";
    }

    //If Computer is greater than User, Computer Win
    else {
        document.getElementById("Results").innerHTML= "You Lose. Try Agian."
    }

    }

//Back Function

    function Back() {
        location.replace("index.html");
    }