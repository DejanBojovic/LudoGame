// creating all numbers of the dice by making some divs hidden and some visible
function diceOne() {
    document.querySelector(".dice-row-1-first").style.visibility = "hidden";
    document.querySelector(".dice-row-1-second").style.visibility = "hidden";
    document.querySelector(".dice-row-1-third").style.visibility = "hidden";
    document.querySelector(".dice-row-2-first").style.visibility = "hidden";
    document.querySelector(".dice-row-2-second").style.visibility = "visible";
    document.querySelector(".dice-row-2-third").style.visibility = "hidden";
    document.querySelector(".dice-row-3-first").style.visibility = "hidden";
    document.querySelector(".dice-row-3-second").style.visibility = "hidden";
    document.querySelector(".dice-row-3-third").style.visibility = "hidden";
}

function diceTwo() {
    document.querySelector(".dice-row-1-first").style.visibility = "visible";
    document.querySelector(".dice-row-1-second").style.visibility = "hidden";
    document.querySelector(".dice-row-1-third").style.visibility = "hidden";
    document.querySelector(".dice-row-2-first").style.visibility = "hidden";
    document.querySelector(".dice-row-2-second").style.visibility = "hidden";
    document.querySelector(".dice-row-2-third").style.visibility = "hidden";
    document.querySelector(".dice-row-3-first").style.visibility = "hidden";
    document.querySelector(".dice-row-3-second").style.visibility = "hidden";
    document.querySelector(".dice-row-3-third").style.visibility = "visible";
}

function diceThree() {
    document.querySelector(".dice-row-1-first").style.visibility = "visible";
    document.querySelector(".dice-row-1-second").style.visibility = "hidden";
    document.querySelector(".dice-row-1-third").style.visibility = "hidden";
    document.querySelector(".dice-row-2-first").style.visibility = "hidden";
    document.querySelector(".dice-row-2-second").style.visibility = "visible";
    document.querySelector(".dice-row-2-third").style.visibility = "hidden";
    document.querySelector(".dice-row-3-first").style.visibility = "hidden";
    document.querySelector(".dice-row-3-second").style.visibility = "hidden";
    document.querySelector(".dice-row-3-third").style.visibility = "visible";
}

function diceFour() {
    document.querySelector(".dice-row-1-first").style.visibility = "visible";
    document.querySelector(".dice-row-1-second").style.visibility = "hidden";
    document.querySelector(".dice-row-1-third").style.visibility = "visible";
    document.querySelector(".dice-row-2-first").style.visibility = "hidden";
    document.querySelector(".dice-row-2-second").style.visibility = "hidden";
    document.querySelector(".dice-row-2-third").style.visibility = "hidden";
    document.querySelector(".dice-row-3-first").style.visibility = "visible";
    document.querySelector(".dice-row-3-second").style.visibility = "hidden";
    document.querySelector(".dice-row-3-third").style.visibility = "visible";
}

function diceFive() {
    document.querySelector(".dice-row-1-first").style.visibility = "visible";
    document.querySelector(".dice-row-1-second").style.visibility = "hidden";
    document.querySelector(".dice-row-1-third").style.visibility = "visible";
    document.querySelector(".dice-row-2-first").style.visibility = "hidden";
    document.querySelector(".dice-row-2-second").style.visibility = "visible"; 
    document.querySelector(".dice-row-2-third").style.visibility = "hidden";
    document.querySelector(".dice-row-3-first").style.visibility = "visible";
    document.querySelector(".dice-row-3-second").style.visibility = "hidden";
    document.querySelector(".dice-row-3-third").style.visibility = "visible";
}

function diceSix() {
    document.querySelector(".dice-row-1-first").style.visibility = "visible";
    document.querySelector(".dice-row-1-second").style.visibility = "hidden";
    document.querySelector(".dice-row-1-third").style.visibility = "visible";
    document.querySelector(".dice-row-2-first").style.visibility = "visible";
    document.querySelector(".dice-row-2-second").style.visibility = "hidden";
    document.querySelector(".dice-row-2-third").style.visibility = "visible";
    document.querySelector(".dice-row-3-first").style.visibility = "visible";
    document.querySelector(".dice-row-3-second").style.visibility = "hidden";
    document.querySelector(".dice-row-3-third").style.visibility = "visible";
}

diceFive(); // it will stay on the page as default number

// displaying dice on the page
const dice = document.querySelector(".dice");

dice.addEventListener("click", function() {
    let diceNum = Math.floor(Math.random() * 6) + 1; // getting dice number
    let diceFunctions = ["eliminating position zero", diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]; // putting all functions in an array

    diceFunctions[diceNum](); // calling function under ordinal number of diceNum
});

// dragNdrop =======================================
const players = document.querySelectorAll(".player");

for(let i = 0; i < players.length; i++) {
    let player = players[i];

    player.addEventListener("mousedown",function(event) {

        // adding cursor to the moving player
        player.style.cursor = "pointer";

        let shiftX = event.clientX - player.getBoundingClientRect().left;
        let shiftY = event.clientY - player.getBoundingClientRect().top;
      
        player.style.position = 'absolute';
        player.style.zIndex = 1000;
        document.body.append(player);
      
        moveAt(event.pageX, event.pageY);
      
        // moves the player at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
            player.style.left = pageX - shiftX + 'px';
            player.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the player on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the player, remove unneeded handlers
        player.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          player.onmouseup = null;
        };
      
    });
      
    player.ondragstart = function() {
        return false;
    };
}
