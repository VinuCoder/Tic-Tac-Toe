console.log("Welcome to Tic Tac Toe")

let audioTurn = new Audio("ting.mp3");
let turn = "X";
let gameover = false;

// Function to change the turn
const changeturn = ()=>{
    return turn ==="X"? "0" :"X"
}

// Function to cheeck for a win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&(boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won "
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "60%"
        }
    })
}

// Game logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
           
        }
    })
})

// Add onclick on reset button

reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = " ";
    });
    turn = "X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0%"
})
