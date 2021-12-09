let firstBox = document.getElementById("one");
let secondBox = document.getElementById("two");
let thirdBox = document.getElementById("three");
let fourthtBox = document.getElementById("four");
let fifthBox = document.getElementById("five");
let sixthBox = document.getElementById("six");
let seventhBox = document.getElementById("seven");
let eightBox = document.getElementById("eight");
let ninthBox = document.getElementById("nine");
let allBoxs = document.querySelectorAll('.box');
let xTurn = document.querySelector('.xturn');
let oTurn = document.querySelector('.oturn');
let board = document.querySelector('.board');
let players = ["X","O"];

// default turn
xTurn.classList.add('on');


// check win function
let checkWin = () => 
{

}

// check drow function
let draw = () => 
{

}
    



allBoxs.forEach((box)=>
{
    
    box.addEventListener('click',()=>
    {
        var turn
        if(xTurn.classList.contains('on'))
        {
        turn = players[0];    
        }
        else if(oTurn.classList.contains('on'))
        {
            turn = players[1];
        }
       if(box.innerHTML!=="X"&&box.innerHTML!=="O")
       {
           box.innerHTML=turn;
           if(turn==="X")
           {
               box.classList.add('x');
           }
           else if(turn === "O")
           {
               box.classList.add('o')
           }
       }
        
        if(xTurn.classList.contains('on'))
        {
            xTurn.classList.remove('on');
            oTurn.classList.add('on');   
            
        }
        else if (oTurn.classList.contains('on'))
        {
            oTurn.classList.remove('on');
            xTurn.classList.add('on');
        }
        
    })

})

