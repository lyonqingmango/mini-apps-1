
var player="X";
var board =["","","",
            "","","",
            "","",""]


var winner =''
var gameStatus =false
function chekckWin(){

  if(board[0]===board[1]&&board[1]===board[2] && board[0]!=='' ){
    gameStatus =true;
    winner =board[0];
  }else if(board[3]===board[4]&&board[4]===board[5] && board[3]!==''){
    gameStatus =true;
    winner =board[3];
  }else if(board[6]===board[7]&&board[7]===board[8] && board[6]!==''){
    gameStatus =true;
    winner =board[6];
  }else if(board[0]===board[3]&&board[3]===board[6] && board[0]!==''){
    gameStatus =true;
    winner =board[0];
  }else if(board[1]===board[4]&&board[4]===board[7] && board[1]!==''){
    gameStatus =true;
    winner =board[1];
  }else if(board[2]===board[5]&&board[5]===board[8] && board[2]!==''){
    gameStatus =true;
    winner =board[2];
  }else if(board[0]===board[4]&&board[4]===board[8] && board[0]!==''){
    gameStatus =true;
    winner =board[0];
  }else if(board[2]===board[4]&&board[4]===board[6] && board[2]!==''){
    gameStatus =true;
    winner =board[2];
  }

return gameStatus;
}


var count=0;


var boxes = document.querySelectorAll(".box");
console.log(boxes)

function updateBox(event){
  var index= event.target.id;
  var i= parseInt(index);

    console.log(gameStatus)
    console.log(count)
    if(gameStatus===false&& count!==9){
      console.log('i'+i);
      console.log(board[i].length+'length');
      console.log(board[i])
      if(board[i].length === 0){
        count+=1;
        if(player ==='X'){
          event.target.innerHTML ='X';
          player ='O';
          board[i]='X';
        }else {
          event.target.innerHTML ='O';
          player ='X';
          board[i]='O';
        }
      }
    }
    chekckWin();
    winnerMessage ()

}

boxes.forEach((box)=>{box.addEventListener("click", updateBox,false)});
var h2=document.querySelector("h2")
console.log(h2);

function winnerMessage (){
  if(gameStatus){
    h2.innerHTML='Winner is '+winner+' !'

  }else if(count===9){
    h2.innerHTML='Tie'
  }else{
    h2.innerHTML='Game is ongoing!'
  }

}




function reset(){
  var boxes = document.querySelectorAll(".box");
  boxes.forEach(function(box){box.innerHTML =""});
  player ='X';
  for(let i=0;i<9;i++){
    board[i]="";

  }
  console.log('new board'+board);
  winner ='';
  gameStatus =false;
  count=0;

}

var button = document.querySelector(".button");
console.log(button);
button.addEventListener("click", reset);


// console.log('hello')


