// identifiers
let allBoxs = document.querySelectorAll('.box');
let xTurn = document.querySelector('.xturn');
let oTurn = document.querySelector('.oturn');
let board = document.querySelector('.board');
let players = ["X","O"];

// default turn
let defaultTurn = prompt("Please select first player to play (X or O)");

if(defaultTurn==="x")
{
    xTurn.classList.add('on');
}
else
{
    oTurn.classList.add('on');
}


// pattern check
function patternCheck(box1,box2,box3)
{
    return (allBoxs[box1].innerText!==""&&allBoxs[box2].innerText!==""&&allBoxs[box3].innerText!=="")&&(allBoxs[box1].innerText===allBoxs[box2].innerText&&allBoxs[box2].innerText===allBoxs[box3].innerText)
}


// check win function
let checkWin = () => 
{
    setTimeout(()=>
    {
        if(patternCheck(0,1,2))
        {        
            alert(`${allBoxs[0].innerText} is winner`);
            window.location.reload();   
        }
        else if(patternCheck(3,4,5))
        {        
            alert(`${allBoxs[3].innerText} is winner`);
            window.location.reload();   
        }
        else if(patternCheck(6,7,8))
        {        
            alert(`${allBoxs[6].innerText} is winner`);
            window.location.reload();   
        }
        else if(patternCheck(0,3,6))
        {        
            alert(`${allBoxs[0].innerText} is winner`);
            window.location.reload();   
        }
        else if(patternCheck(1,4,7))
        {        
            alert(`${allBoxs[1].innerText} is winner`);
            window.location.reload();   
        }
        else if(patternCheck(2,5,8))
        {        
            alert(`${allBoxs[2].innerText} is winner`);   
        }
        else if(patternCheck(0,4,8))
        {        
            alert(`${allBoxs[0].innerText} is winner`);
            window.location.reload();   
        }
        else if(patternCheck(2,4,6))
        {        
            alert(`${allBoxs[2].innerText} is winner`);
            window.location.reload();   
        }
        else if(allBoxs[0].innerText!==""&&allBoxs[1].innerText!==""&&allBoxs[2].innerText!==""&&allBoxs[3].innerText!==""&&allBoxs[4].innerText!==""&&allBoxs[5].innerText!==""&&allBoxs[6].innerText!==""&&allBoxs[7].innerText!==""&&allBoxs[8].innerText!=="")
        {
            alert(`Draw`);
            window.location.reload();
        }
        
        
    },100);
}
    

// Game logic
allBoxs.forEach((box)=>
{
    
    box.addEventListener('click',()=>
    {
        var turn
        if(xTurn.classList.contains('on'))
        {
        turn = players[0];    
        }
        else 
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
        checkWin();    
    })
    
})

