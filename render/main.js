const Root_div=document.getElementById("root");

//use when you want to render pieces when game start
function pieceRender(data){
    console.log(data);
    data.forEach(row => {
        row.forEach(square => {
            if(square.piece){            //if square has piece
             const squareEl =document.getElementById(square.id);
             //create piece
             const piece =document.createElement("img");
             piece.src=square.piece.img;
             piece.classList.add("piece");

             //inser to square
             squareEl.appendChild(piece);
            

             
              
            }
            
        });
        
    });
    
}

//=========importing black,white pawn=============

import *as pieces from "../Data/pices.js";

/*=================render init (calls when games start only for one time)***************/

function initGameRender(data){

  data.forEach(element => {                           //initGame
    const rowE1=document.createElement("div");
    element.forEach(square => {                         //squareRow(8),squareRow (7)
      const squareDiv =document.createElement("div");
      squareDiv.classList.add(square.color,"square");
      squareDiv.id=square.id;                            //id passed to each square

   /*filling black pieces*/   
      if(square.id[1]==7) {
         square.piece=pieces.blackPawn(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="c8"||square.id=="f8") {
         square.piece=pieces.blackBishop(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="b8"||square.id=="g8") {
         square.piece=pieces.blackKnight(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="a8"||square.id=="h8") {
         square.piece=pieces.blackRook(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="d8") {
         square.piece=pieces.blackQueen(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="e8") {
         square.piece=pieces.blackKing(square.id);           //7th row for black pawn
      
      }   
      
      //filling white pices//

      if(square.id[1]==2) {
        square.piece= pieces.whitePawn(square.id);          //2nd row for white pawn a7 b7 .....
      }
      
      
rowE1.appendChild(squareDiv);
});
     
     rowE1.classList.add("squareRow")
     Root_div.appendChild(rowE1)
    
    
  });
   pieceRender(data);
}
export {initGameRender};



