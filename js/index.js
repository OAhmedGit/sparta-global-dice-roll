// Your code here

//invokes the clearWIndow() function.
//generates a random number between 1 and 6 and passes the result to the function drawDots(). 
function randomNum(){
    clearWindow();
    var random = Math.floor(Math.random() * 6) + 1;
    drawDots(random);
}

//this function has a switch statement which goes through the possible cases (1-6) and adds the css .dot class to
//the class of the appropriate id which I have specified in the html code.
function drawDots(diceNum){
    switch(diceNum){
        case 1:
            document.getElementById("mid").classList.add("dot");
            break;
        case 2:
            document.getElementById("mid-left").classList.add("dot");
            document.getElementById("mid-right").classList.add("dot");
            break;
        case 3:
            document.getElementById("mid").classList.add("dot");
            document.getElementById("mid-left").classList.add("dot");
            document.getElementById("mid-right").classList.add("dot");
            break;
        case 4:
            document.getElementById("top-left").classList.add("dot");
            document.getElementById("top-right").classList.add("dot");
            document.getElementById("bot-left").classList.add("dot");
            document.getElementById("bot-right").classList.add("dot");
            break;
        case 5:
            document.getElementById("mid").classList.add("dot");
            document.getElementById("top-left").classList.add("dot");
            document.getElementById("top-right").classList.add("dot");
            document.getElementById("bot-left").classList.add("dot");
            document.getElementById("bot-right").classList.add("dot");
            break;
        case 6:
            document.getElementById("mid-left").classList.add("dot");
            document.getElementById("mid-right").classList.add("dot");
            document.getElementById("top-left").classList.add("dot");
            document.getElementById("top-right").classList.add("dot");
            document.getElementById("bot-left").classList.add("dot");
            document.getElementById("bot-right").classList.add("dot");
            break;
        default:
    }
}

//function to clear the dots from the html page otherwise the dots will stay there and won't update.
function clearWindow(){
    document.getElementById("mid").classList.remove("dot");
    document.getElementById("mid-left").classList.remove("dot");
    document.getElementById("mid-right").classList.remove("dot");
    document.getElementById("top-left").classList.remove("dot");
    document.getElementById("top-right").classList.remove("dot");
    document.getElementById("bot-left").classList.remove("dot");
    document.getElementById("bot-right").classList.remove("dot");
}

