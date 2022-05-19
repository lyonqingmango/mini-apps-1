
var player="X";
var board =["","","",
            "","","",
            "","",""]



var boxes = document.querySelectorAll(".box");
console.log(boxes)

function updateBox(event){
    var index= event.target.id;
    var i= parseInt(index);

    if(board[i].length === 0){
      if(player ==='X'){
        event.target.innerHTML ='X';
        player ='O';
        board[i]='X';

      }else {
        event.target.innerHTML ='O';
        player ='X';
      }

    }
}

boxes.forEach((box)=>{box.addEventListener("click", updateBox,false)});










function reset(){
  var boxes = document.querySelectorAll(".box");
  boxes.forEach(function(box){box.innerHTML =""});

}

var button = document.querySelector(".button");
console.log(button);
button.addEventListener("click", reset);


// console.log('hello')


