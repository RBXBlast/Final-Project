// Website


// Event Listener
document.getElementById("tonyStark", "duck").addEventListener("click", tonyVoice);
document.getElementById("duck").addEventListener("click", duckVoice);
document.getElementById("bruceWayne").addEventListener("click", bruceVoice);
document.getElementById("smaug").addEventListener("click", smaugVoice);
document.getElementById("mail-btn").addEventListener("click", clearMail);
document.getElementById("unsub-btn").addEventListener("click", unSub);
document.getElementById("fb-btn").addEventListener("click", clearFb);
document.getElementById("ship").addEventListener("click", move);
document.getElementById("raffle-btn").addEventListener("click", raffle);

// Global Variables
var object = document.getElementById('ship');
var audio1 = new Audio("Audio/loser.mp3");
var audio2 = new Audio("Audio/bruh.mp3");
var audio3 = new Audio("Audio/cheer.mp3");
var audio4 = new Audio("Audio/ustoopid.mp3");
var cash = 0;

//Functions
function tonyVoice() {
    // Play Tony Voice Clip
    var audioT = new Audio("Audio/caught.mp3");
    audioT.play();
}

function duckVoice() {
    // Play Duck Voice Clip
    var audioD = new Audio("Audio/duck.mp3");
    audioD.play();
}

function bruceVoice() {
    // Play Bruce Voice Clip
    var audioB = new Audio("Audio/tetx.mp3");
    audioB.play();
}

function smaugVoice() {
    // Play Smaug Voice Clip
    var audioS = new Audio("Audio/pain75_1.wav");
    audioS.play();
}

function clearMail() {
    // Clear the input field and alert user
    document.getElementById("clientmail").value = '';
    alert("You are now subscribed!")
}

function unSub() {
    // Clear the input field and alert user
    document.getElementById("clientmail").value = '';
    alert("You are no longer subscribed. We are sad to see you leave.")
}

function clearFb() {
    // Clear the input field and alert user
    document.getElementById("feedback").value = '';
    alert("Thank you for that valuable input.")
}

function move() {
    // Randomly move the Spaceship when clicked on, Doesn't interfere with the rest of the tabs
    var y = Math.round(Math.random() * 300);
    var x = Math.round(Math.random() * 300);
    object.style.left = x + 'px';
    object.style.top = y + 'px';
    console.log("x: " + x);
    console.log("y: " + y);
};

function raffle() {
    // Money is the variable
    let money = Number(document.getElementById("input").value);
    if (money % 100 == 0 && money <= 900) {
        // Simulate Result
        let randNum = Math.random(); // Random Decimal from 0-1
        // Very Low Chance of winning 
        if (randNum < 0.999) {
            document.getElementById("results").innerHTML = "Marvin doesn't want you at his home";
            document.getElementById("win").innerHTML = "";
            var audio1 = new Audio("Audio/loser.mp3");
            audio1.play();
        } else if (randNum <= 0.001) {
            // Winner
            document.getElementById("results").innerHTML = "Welcome to Mars";
            document.getElementById("win").innerHTML = '<img src = "Images/winner.png">';
            var audio3 = new Audio("Audio/cheer.mp3");
            audio1.pause();
            audio2.pause();
            audio3.play();
        }
    } else if (money % 100 == 0 && money >= 1000 && money < 10000) {
        let randNum = Math.random(); // Random Decimal from 0-1
        // Slightly Higher Chance of Winning
        if (randNum <= 0.05) {
            document.getElementById("results").innerHTML = "Welcome to Mars";
            document.getElementById("win").innerHTML = '<img src = "Images/winner.png">';
            var audio3 = new Audio("Audio/cheer.mp3");
            audio3.play();
            audio1.pause();
        } else {
            // Loser
            var audio1 = new Audio("Audio/loser.mp3")
            audio1.play();
            document.getElementById("results").innerHTML = "Better luck next time";
            document.getElementById("win").innerHTML = "";
        }
    } else if (money % 100 == 0 && money >= 10000) {
        // Goodish Chance of Winning
        let randNum = Math.random(); // Random Decimal from 0-1
        if (randNum <= 0.20) {
            document.getElementById("results").innerHTML = "Welcome to Mars";
            document.getElementById("win").innerHTML = '<img src = "Images/winner.png">';
            var audio3 = new Audio("Audio/cheer.mp3");
            audio3.play();
            audio1.pause();

        } else {
            // Loser
            document.getElementById("results").innerHTML = "Better luck next time";
            document.getElementById("win").innerHTML = "";
            var audio1 = new Audio("Audio/loser.mp3");
            audio1.play();
        }
    }
    if (money == "") {
        // If input value is null
        money = String(document.getElementById("input").value);
        document.getElementById("results").innerHTML = "Pay up! This isn't a charity";
        document.getElementById("win").innerHTML = "";
        var audio2 = new Audio("Audio/bruh.mp3");
        audio1.pause();
        audio2.play();
    }
    money = Number(document.getElementById("input").value);
    if (money % 100 != 0) {
        // If input value is not divisible by 100
        money = Number(document.getElementById("input").value);
        document.getElementById("results").innerHTML = "Only put numbers divisible by 100! Not that weird number";
        document.getElementById("win").innerHTML = "";
        var audio4 = new Audio("Audio/ustoopid.mp3");
        // audio1.pause();
        // audio2.pause();
        audio4.play();
    }
    if (money % 100 == 0 && money >=0) {
        // Display Money Spent
        cash += money;
    }
    document.getElementById("moneyGain").innerHTML = cash;
    if(money <0){
        document.getElementById("results").innerHTML = "That's a negative number fool"
    }
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openPage(pageName, element, color) {
    // Hide all elements with class="tabcontent" by default */
    var tc, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (tc = 0; tc < tabcontent.length; tc++) {
        tabcontent[tc].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (tc = 0; tc < tablinks.length; tc++) {
        tablinks[tc].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
}