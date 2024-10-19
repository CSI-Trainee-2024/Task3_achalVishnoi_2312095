const Root_div=document.getElementById("root");

//use when you want to render pieces when game start
function pieceRender(data){}

//=========importing black pawn=============
import { blackPawn } from "../Data/pices.js";
/*=================render init (calls when games start only for one time)***************/

function initGameRender(data){

  data.forEach(element => {                           //initGame
    const rowE1=document.createElement("div");
    element.forEach(square => {                         //squareRow(8),squareRow (7)
      const squareDiv =document.createElement("div");
      squareDiv.classList.add(square.color,"square");
      if(square.id[1]==7) {
         square.piece="black pawn"
         console.log(square.piece);
      }   
      if(square.id[1]==2) {
        square.piece="white pawn"
        console.log(square.piece);
      }                                            //a7 b7 .......
      rowE1.appendChild(squareDiv);
});
     
     rowE1.classList.add("squareRow")
     Root_div.appendChild(rowE1)
    
    
  });

pieceRender(data);
}
export {initGameRender};



