const Root_div=document.getElementById("root");
export{Root_div}
import { globalstate } from "../index.js";


//use when you want to render pieces when game start
function pieceRender(data){
    
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


function renderHighlight(squareId){
   const highlightSpan=document.createElement("span");
   highlightSpan.classList.add("hilight");
   document.getElementById(squareId).appendChild(highlightSpan);
   

}

function clearHighlight(){
 const flatData=globalstate.flat();
 flatData.forEach(el=>{
   if(el.highlighted){
      document.getElementById(el.id).innerHTML="";
   }
   
   
 })
 console.log(flatData);
 
}

//=========importing black,white pawn=============

import *as pieces from "../Data/pices.js";
 

/*=================render init (use when board render for first time)***************/

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
      if(square.id=="c1"||square.id=="f1") {
        square.piece=pieces.whiteBishop(square.id);           
     
     }   
     if(square.id=="b1"||square.id=="g1") {
        square.piece=pieces.whiteKnight(square.id);           
     
     }   
     if(square.id=="a1"||square.id=="h1") {
        square.piece=pieces.whiteRook(square.id);           
     
     }   
     if(square.id=="d1") {
        square.piece=pieces.whiteQueen(square.id);           
     
     }   
     if(square.id=="e1") {
        square.piece=pieces.whiteKing(square.id);
     
     } 
      
rowE1.appendChild(squareDiv);
});
     
     rowE1.classList.add("squareRow")
     Root_div.appendChild(rowE1)
    
    
  });
   pieceRender(data);
}
export {initGameRender,renderHighlight,clearHighlight};



